import pyrebase
from typing import List
from fuzzywuzzy.fuzz import WRatio
from fuzzywuzzy.process import extract
import time 

from os import environ 
from dotenv import load_dotenv
from json import loads as str_to_dict

load_dotenv(".env")

config_data = str_to_dict( environ.get("DATABASE_CONFIG") )

firebase = pyrebase.initialize_app(config_data)
db = firebase.database()

def data_filter(value, q_filter):
  if q_filter == "":
    return value

  q_filter = q_filter.split(",")

  return {current_filter: value[current_filter] for current_filter in q_filter if current_filter in value}


class Database():
  def get_all_anime(self, q_filter, limit, offset, genres):
    if genres != "":
      all_anime = self.get_all_anime_by_genre(genres, q_filter, limit, offset)
      return all_anime

    q_filter = q_filter.split(",")

    found_anime = db.child("anime").get().each()[offset:][:limit] 
    all_anime = []
    if q_filter != "":
      for anime in found_anime:
        try:
          all_anime.append({current_filter: anime.val()[current_filter] for current_filter in q_filter})
        except KeyError:
          print(f"Нет одного из ключей у аниме: {anime.key()}")
    else:
      for anime in found_anime:
        all_anime.append(anime.val())

    return all_anime

  def get_anime(self, anime_title, q_filter):
    data = db.child("anime").order_by_child("title").equal_to(f"{anime_title}").get().val()
    return data_filter(list(data.values())[0], q_filter)

  def get_all_anime_by_genre(self, genres, q_filter, limit, offset):
    if genres == "" or genres == ",":
      return self.get_all_anime(q_filter, limit, offset)

    genres = [genre.lower() for genre in genres.split(",")]

    data = db.child("anime").order_by_child("title").get().each()[offset:][:limit]

    all_anime = []
    for data_item in data:
      current_anime_genres = data_item.val()["genres"]

      can_be_added = True
      for genre in genres:
        if genre not in current_anime_genres:
          can_be_added = False
          break

      if can_be_added:
        all_anime.append(data_filter(data_item.val(), q_filter))

    return all_anime

  def search_anime(self, title, limit, offset, q_filter):
    start_time = time.time()

    ordered_data = db.child("anime").order_by_child("title").get().val()

    found_data = []
    for key in ordered_data:
      data = ordered_data.get(key)
      if WRatio(title, data["title"]) >= 60:
        found_data.append(data)

    print(f"[+]Time spent: {time.time()-start_time}")
    return found_data

  def test():
    return db.child("anime").order_by_child("title").equal_to("Ван Пис").get().val()

# dbase = Database()
# print(dbase.search_anime("в", 0, 0, ""))

