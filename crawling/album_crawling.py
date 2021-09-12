import time
import json
import csv
import requests


from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait

from bs4 import BeautifulSoup

options = Options()
options.headless = True
browser = webdriver.Chrome(
    executable_path="./chromedriver.exe", options=options)
browser.get("https://people.search.naver.com/search.naver?where=nexearch&query=%EC%95%84%EC%9D%B4%EC%9C%A0&sm=tab_etc&ie=utf8&key=PeopleService&os=159229")


html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

dummy = []
try:

    while True:

        html = browser.page_source
        soup = BeautifulSoup(html, 'html.parser')

        for i in range(1, 6):
            result = soup.select(
                '#content > div > div.workact_wrap > div > div.workact.type4 > div._panel_album > ul > li:nth-child({}) > span.tit_wrap._ellipsis > a > span.tit_main._text'.format(i))
            for r in result:
                dummy.append(r.text.strip())
                # print(r.text.strip())

        test = browser.find_elements_by_xpath(
            '//*[@id="pagination_79"]/span[4]/a')

        test[0].click()

except:
    print("end")

# Google Search---------------------------------------------------------------------
result_data = []
for item in dummy:

    baseUrl = 'https://www.google.com/search?q='
    # queryString = "맬론 IU 5th Album 'LILAC' 아이유"
    queryString = "멜론 {} 아이유".format(item)
    # queryString = "멜론 {} 아이유".format("삐삐")
    url = baseUrl + queryString

    browser.get(url)

    html = browser.page_source
    soup = BeautifulSoup(html, 'html.parser')

    tmp = ''
    # 구글 게시글 예외 처리
    result = soup.select(
        '#rso > div:nth-child(1) > div > div.tF2Cxc > div.yuRUbf > a')

    if len(result) == 0:
        result = soup.select(
            '#rso > div:nth-child(7) > div > div.tF2Cxc > div.yuRUbf > a')

    if len(result) == 0:
        result = soup.select(
            '#rso > div:nth-child(1) > div > div > div > div.yuRUbf > a')

    for r in result:
        tmp = r.get("href")
        print(r.get("href"))
    URL = tmp
    browser.get(URL)

    # Melon Crawling
    row_data = []
    time.sleep(1)
    html = browser.page_source
    soup = BeautifulSoup(html, 'html.parser')

    album_name = ''
    try:
        # Album Name
        album_name_element = soup.select(
            '#conts > div.section_info > div > div.entry > div.info > div.song_name')

        for r in album_name_element:
            album_name = r.text.strip()
        print(album_name)
        tmp_result = album_name.split("\n")
        print(tmp_result)
        print(tmp_result[1].replace("\t", ""))
        row_data.append(tmp_result[1].replace("\t", ""))
    except:
        # 삐삐 예외 처리
        continue

        # album_name_element = soup.select(
        #     '#downloadfrm > div > div > div.entry > div.info > div.song_name')

        # for r in album_name_element:
        #     album_name = r.text.strip()
        # print(album_name)
        # tmp_result = album_name.split("\n")
        # print(tmp_result)
        # print(tmp_result[1].replace("\t", ""))
        # row_data.append(tmp_result[1].replace("\t", ""))

     # img
    img_src_element = soup.select(
        '#d_album_org > img')
    img_src = ''
    for r in img_src_element:
        img_src = r.get("src")

    print(img_src)
    row_data.append(img_src)

    # release_date
    release_date_element = soup.select(
        '#conts > div.section_info > div > div.entry > div.meta > dl > dd:nth-child(2)')
    release_date = ''
    for r in release_date_element:
        release_date = r.text.strip()

    print(release_date)
    row_data.append(release_date)

    # type
    album_type = ''
    try:
        album_type_element = soup.select(
            '#conts > div.section_info > div > div.entry > div.info > span')
        for r in album_type_element:
            album_type = r.text.strip()

        print(album_type)
        row_data.append(album_type)
    except:
        album_type = ''

    result_data.append(row_data)

    print(row_data)
print(result_data)


with open('test03.csv', 'w', encoding='utf-8-sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    # writer.writerow(["title", "image_url", "release_date"])
    for i in result_data:
        writer.writerow(i)
