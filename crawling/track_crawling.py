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
browser.get(
    "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9C%A0%EC%9D%98_%EC%9D%8C%EB%B0%98_%EB%AA%A9%EB%A1%9D")


html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

result_data = []

# 정규
tmp = []
num = 1
while True:

    result = soup.select(
        '#mw-content-text > div.mw-parser-output > table:nth-child(6) > tbody > tr:nth-child({}) > th > a'.format(num+2))
    print(result)
    if len(result) == 0:
        break
    for r in result:
        tmp_data = {
            "url": r.get("href"),
            "title": r.text.strip()
        }
        tmp.append(tmp_data)
        print(r.get("href"))
    num = num + 1


for item in tmp:
    browser.get("https://ko.wikipedia.org"+item["url"])
    html = browser.page_source
    soup = BeautifulSoup(html, 'html.parser')
    i = 2
    while True:
        track_info = [item["title"]]
        for j in range(1, 6):
            track_info_element = soup.select(
                '#mw-content-text > div.mw-parser-output > table.tracklist > tbody > tr:nth-child({}) > td:nth-child({})'.format(i, j))
            for r in track_info_element:
                track_info.append(r.text.strip().replace(
                    ".", "").replace("\"", ""))
        print(track_info)
        if track_info[1] == '총 재생 시간:':
            break
        i = i + 1
        result_data.append(track_info)

# 미니
browser.get(
    "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9C%A0%EC%9D%98_%EC%9D%8C%EB%B0%98_%EB%AA%A9%EB%A1%9D#%EB%AF%B8%EB%8B%88_%EC%9D%8C%EB%B0%98")


html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')
tmp = []
num = 1
while True:
    result = soup.select(
        '#mw-content-text > div.mw-parser-output > table:nth-child(16) > tbody > tr:nth-child({}) > th > a'.format(num+2))
    print(result)
    if len(result) == 0:
        break
    for r in result:
        tmp_data = {
            "url": r.get("href"),
            "title": r.text.strip()
        }
        tmp.append(tmp_data)
        print(r.get("href"))
    num = num + 1

for item in tmp:
    print(item)
    browser.get("https://ko.wikipedia.org"+item["url"])
    html = browser.page_source
    soup = BeautifulSoup(html, 'html.parser')
    i = 2
    while True:
        try:
            track_info = [item["title"]]
            for j in range(1, 6):
                track_info_element = soup.select(
                    '#mw-content-text > div.mw-parser-output > table.tracklist > tbody > tr:nth-child({}) > td:nth-child({})'.format(i, j))
                for r in track_info_element:
                    track_info.append(r.text.strip().replace(
                        ".", "").replace("\"", ""))
            # print(track_info)
            if track_info[1] == '총 재생 시간:':
                break
            i = i + 1
            result_data.append(track_info)
        except:
            break

print(result_data)

# 리메이크
browser.get(
    "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9C%A0%EC%9D%98_%EC%9D%8C%EB%B0%98_%EB%AA%A9%EB%A1%9D#%EB%AF%B8%EB%8B%88_%EC%9D%8C%EB%B0%98")


html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')
tmp = []
num = 1
while True:

    result = soup.select(
        '#mw-content-text > div.mw-parser-output > table:nth-child(18) > tbody > tr:nth-child({}) > th > a'.format(num+2))
    print(result)
    if len(result) == 0:
        break
    for r in result:
        tmp_data = {
            "url": r.get("href"),
            "title": r.text.strip()
        }
        tmp.append(tmp_data)
    num = num + 1

for item in tmp:
    print(item)
    browser.get("https://ko.wikipedia.org"+item["url"])
    html = browser.page_source
    soup = BeautifulSoup(html, 'html.parser')
    i = 2
    while True:
        try:
            track_info = [item["title"]]
            for j in range(1, 6):
                track_info_element = soup.select(
                    '#mw-content-text > div.mw-parser-output > table.tracklist > tbody > tr:nth-child({}) > td:nth-child({})'.format(i, j))
                for r in track_info_element:
                    track_info.append(r.text.strip().replace(
                        ".", "").replace("\"", ""))
            print(track_info)
            if track_info[1] == '총 재생 시간:':
                break
            i = i + 1
            result_data.append(track_info)
        except:
            break

# 싱글
browser.get(
    "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9C%A0%EC%9D%98_%EC%9D%8C%EB%B0%98_%EB%AA%A9%EB%A1%9D#%EB%AF%B8%EB%8B%88_%EC%9D%8C%EB%B0%98")


html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')
tmp = []
num = 1
while True:

    result = soup.select(
        '#mw-content-text > div.mw-parser-output > table:nth-child(20) > tbody > tr:nth-child({}) > th > a'.format(num+2))
    print(result)
    if len(result) == 0:
        break
    for r in result:
        tmp_data = {
            "url": r.get("href"),
            "title": r.text.strip()
        }
        tmp.append(tmp_data)
    num = num + 1

for item in tmp:
    print(item)
    browser.get("https://ko.wikipedia.org"+item["url"])
    html = browser.page_source
    soup = BeautifulSoup(html, 'html.parser')
    i = 2
    while True:
        try:
            track_info = [item["title"]]
            for j in range(1, 6):
                track_info_element = soup.select(
                    '#mw-content-text > div.mw-parser-output > table.tracklist > tbody > tr:nth-child({}) > td:nth-child({})'.format(i, j))
                for r in track_info_element:
                    track_info.append(r.text.strip().replace(
                        ".", "").replace("\"", ""))
            print(track_info)
            if track_info[1] == '총 재생 시간:':
                break
            i = i + 1
            result_data.append(track_info)
        except:
            break

print(result_data)

with open('data/track.csv', 'w', encoding='utf-8-sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    # writer.writerow(["title", "image_url", "release_date"])
    for i in result_data:
        writer.writerow(i)
