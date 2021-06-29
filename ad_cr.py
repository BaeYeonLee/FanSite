import requests
from bs4 import BeautifulSoup

URL = 'https://truegirlsave2.tistory.com/373'

# Naver
# URL = 'https://people.search.naver.com/search.naver?where=nexearch&query=%EC%95%84%EC%9D%B4%EC%9C%A0&sm=tab_etc&ie=utf8&key=PeopleService&os=159229&txp=prize'

# URL = 'https://theqoo.net/iu/1583631256'
# URL = 'https://vibe.naver.com/artist/112579/albums'

response = requests.get(URL)
# response.status_code

html = response.content
# print(html)
soup = BeautifulSoup(html, 'html5lib')
result = soup.find_all('img')
for r in result:
    print(r.get("src"))
