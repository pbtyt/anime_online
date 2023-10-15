from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import Database as DB
from typing import List
from schemas import Anime

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dbase = DB()

#cmd: uvicorn api:app --reload (command to start api)
#q_filter params: poster, link, title, description, etc...

@app.get("/v1/title_list", response_model_exclude_none=True)
def return_title_list(limit: int = 10, offset: int = 0, q_filter: str = "", genres: str = ""):
    return dbase.get_all_anime(q_filter, limit, offset, genres)

@app.get("/v1/title", response_model_exclude_none=True)
def get_title(title: str = "", q_filter: str = "") -> Anime:
    return dbase.get_anime(title, q_filter)

@app.get("/v1/title/search", response_model_exclude_none=True)
def search_anime_title(title: str = "", limit: int = 10, offset: int = 0, q_filter: str = ""):
    return dbase.search_anime(title, limit, offset, q_filter)