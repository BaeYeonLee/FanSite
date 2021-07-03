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
    "https://ko.wikipedia.org/wiki/%EC%95%84%EC%9D%B4%EC%9C%A0%EC%9D%98_%EC%9D%8C%EB%B0%98_%EC%99%B8_%ED%99%9C%EB%8F%99_%EB%AA%A9%EB%A1%9D")


html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

result_data = []

# 드라마
num = 2
while True:
    tmp = []
    result = []
    for j in range(2, 5):
        result = soup.select(
            '#mw-content-text > div.mw-parser-output > table:nth-child(8) > tbody > tr:nth-child({}) > td:nth-child({})'.format(num+1, j))

        if len(result) == 0:
            result = []
            continue
        for r in result:
            tmp_data = r.text.strip()
            print(tmp_data)

            tmp.append(tmp_data)
    if len(tmp) != 0:
        result_data.append(tmp)
    if len(result) == 0:
        break
    num = num + 1

print(result_data)


# 영화
num = 2
while True:
    tmp = []
    result = []
    for j in range(1, 5):
        result = soup.select(
            '#mw-content-text > div.mw-parser-output > table:nth-child(10) > tbody > tr:nth-child({}) > td:nth-child({})'.format(num, j))
        if len(result) == 0:
            result = []
            continue
        for r in result:
            tmp_data = r.text.strip()
            print(tmp_data)

            tmp.append(tmp_data)
    if len(tmp) != 0:
        result_data.append(tmp)
    if len(result) == 0:
        break
    num = num + 1

print(result_data)

with open('data/filmo.csv', 'w', encoding='utf-8-sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    # writer.writerow(["title", "image_url", "release_date"])
    for i in result_data:
        writer.writerow(i)
