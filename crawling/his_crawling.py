import time
import json
import csv


from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.wait import WebDriverWait

from bs4 import BeautifulSoup

options = Options()
options.headless = True
browser = webdriver.Chrome(
    executable_path="./chromedriver.exe", options=options)
browser.get("https://people.search.naver.com/search.naver?where=nexearch&query=%EC%95%84%EC%9D%B4%EC%9C%A0&sm=tab_etc&ie=utf8&key=PeopleService&os=159229")

browser.find_element_by_partial_link_text(
    '수상').click()

# test = browser.find_elements_by_xpath(
#     '//li[@nocr]').find_elements_by_css_selector("*").find
# print(tag_names.text.split("\n"))
# for tag in test:
#     print("==>")
#     print(tag)
#     tag.click()

# browser.find_element_by_class_name(
#     'people_paging').find_elements_by_css_selector('*')[4].click()

html = browser.page_source
soup = BeautifulSoup(html, 'html.parser')

# test = browser.find_elements_by_xpath(
#     '//*[@id="content"]/div/div[3]/ul/li[2]/a')
# test[0].click()
# time.sleep(2)
# browser.find_element_by_partial_link_text(
#     '다음').click()

dummy = []
try:

    while True:

        test = browser.find_element_by_class_name("record_wrap").find_elements_by_xpath(
            '//*[@id="pagination_prize"]/span[4]/a')

        test[0].click()

        html = browser.page_source
        soup = BeautifulSoup(html, 'html.parser')
        for i in [2, 4, 6, 8, 10]:
            tmp = []
            result = soup.select(
                '#listUI_prize > dd:nth-child({}) > p'.format(i))
            for r in result:
                tmp.append(r.text.strip())
                print(r.text.strip())

            result1 = soup.select(
                '#listUI_prize > dt:nth-child({})'.format(i-1))
            for r in result1:
                tmp.append(r.text.strip())
                print(r.text.strip())
            dummy.append(tmp)
except:
    print("end")
    print(dummy)


with open('write_test.csv', 'w', encoding='utf-8-sig', newline='') as csvfile:
    writer = csv.writer(csvfile)
    writer.writerow(["title", "year"])
    for i in dummy:
        writer.writerow(i)
    # result = soup.select('#listUI_prize > dd:nth-child(2) > p')
    # for r in result1:
    #     print(r.text.strip())

    # result = soup.select('p')

    # for r in result:
    #     print(r.text)

    # time.sleep(3)

    # tag_names = browser.find_element_by_class_name(
    #     'people_paging').find_elements_by_css_selector('*')
    # # print(tag_names.text.split("\n"))
    # for tag in tag_names:
    #     print(tag.text.split("\n"))
