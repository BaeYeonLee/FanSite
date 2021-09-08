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

# 정규
tmp = []
num = 2
while True:
    result =''
    text_tmp=''
    for j in range(1, 6):
        if j != 1:
            text_tmp += "*"
        result = soup.select(
            '#mw-content-text > div.mw-parser-output > table:nth-child(29) > tbody > tr:nth-child({}) > td:nth-child({})'.format(num,j))
      
        for r in result:
            text_tmp += r.text.strip()
    print(text_tmp)
    if len(text_tmp) == 4:
        break
    tmp.append(text_tmp)
    num = num + 1

with open('ad_test.csv', 'w', encoding='utf-8-sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    # writer.writerow(["image_url"])
    for i in tmp:
        print(i)
        writer.writerow(i)