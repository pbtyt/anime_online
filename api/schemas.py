from pydantic import BaseModel
from typing import Optional, List, Dict

class Anime(BaseModel):
	description: Optional[str] = None
	episode_count: Optional[int] = None
	genres: Optional[List[str]] = None
	poster: Optional[str] = None
	seasons: Optional[Dict[str, List[str]]] = None
	title: Optional[str] = None
	years: Optional[List[int]] = None
