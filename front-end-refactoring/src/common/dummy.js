const boardList = [
  {
    title: 'WAVVE',
    img: 'https://blog.kakaocdn.net/dn/caUjFr/btqWLY51BRz/95Eyf7jQ39xSOCEvvEl5V1/img.jpg',
  },
  {
    title: '반올림피자샵',
    img: 'https://blog.kakaocdn.net/dn/Tgzdb/btqWzsOadXo/C79qtBSudEdU110hSb55BK/img.jpg',
  },
  {
    title: '한두이서',
    img: 'https://blog.kakaocdn.net/dn/nsKgU/btqWKkhrp77/Ak298WfXiSnjxoJUxsIDhk/img.jpg',
  },
  {
    title: 'CNP',
    img: 'https://blog.kakaocdn.net/dn/bcWZps/btqWNdu5yLj/K4EOVBGnOPqYjSzac6UuhK/img.jpg',
  },
  {
    title: '=',
    img: 'https://blog.kakaocdn.net/dn/dE0ORx/btqWGLzDR5I/cCziNhPY6rskhICHmaAUVk/img.jpg',
  },
  {
    title: 'BLACK YAK',
    img: 'https://blog.kakaocdn.net/dn/bikYUd/btqWKYypYle/f2ecoTk1BBOxNlmpHMpAJK/img.jpg',
  },
  {
    title: '이브자리',
    img: 'https://blog.kakaocdn.net/dn/nmgqF/btqWGLNaCvA/KK1AdGJuQeg3K6EGk2yv2K/img.jpg ',
  },
  {
    title: 'W',
    img: 'https://blog.kakaocdn.net/dn/dd3kQI/btqWzurIaxO/Uh9ksoLoTvHydZhDSwprz1/img.jpg',
  },
  {
    title: '그날엔',
    img: 'https://blog.kakaocdn.net/dn/97klF/btqWOfzpTO5/JW3by6M7Yzk0sYdM28OoE0/img.jpg',
  },
  {
    title: '하이트 진로',
    img: 'https://blog.kakaocdn.net/dn/tvQ8y/btqWGLGmnVq/kzkokRp3CNed5OpNwvKBtK/img.jpg ',
  },
  {
    title: '=',
    img: 'https://blog.kakaocdn.net/dn/cegHbd/btqWKku1V2I/Na9ukBtocn1NCJrP0mNKEk/img.jpg',
  },
  {
    title: '삼다수',
    img: 'https://blog.kakaocdn.net/dn/MYtun/btqWzud9Zar/wHfkK9hhttpnkR68HaPN40/img.jpg',
  },
]
const replyList = [
  {
    r_id: 1,
    b_id: 1,

    writer: '쓴이',
    content: '리플입니다',
    date: '21.04.15 09:52',
  },
  {
    r_id: 2,
    b_id: 1,
    writer: '쓴이1',
    content: '리플입니다1',
    date: '21.04.15 09:53',
  },
]

const albumList = [
  {
    id: 4,
    title: '라일락',
    img: 'https://musicmeta-phinf.pstatic.net/album/005/211/5211473.jpg?type=r360Fll&v=20210326102709',
    date: '2021.03.25',
    album_type: 'studio',
    trackList: [
      {
        no: 1,
        name: '라일락',
        lyrics: ['아이유'],
        composed: ['임수호', 'Dr.JO', '옹킴', 'N!ko'],
        arranged: ['임수호', '옹킴', 'N!ko'],
      },
      {
        no: 2,
        name: 'Flu',
        lyrics: ['아이유'],
        composed: [
          '라이언 전',
          'Martin Coogan',
          'Madilyn Bailey',
          'Zacchariah Palmer',
          'London Jackson',
          'Jacob Chatelain',
        ],
        arranged: ['Jacob Chatelain', 'London Jackson', '라이언 전'],
      },
      {
        no: 3,
        name: 'Coin',
        lyrics: ['아이유'],
        composed: ['Poptime', 'Kako', '아이유'],
        arranged: ['Poptime'],
      },
      {
        no: 4,
        name: '봄 안녕 봄',
        lyrics: ['아이유'],
        composed: ['나얼'],
        arranged: ['강화성'],
      },
    ],
  },
  {
    id: 3,
    title: 'I-land OST',
    img: 'https://musicmeta-phinf.pstatic.net/album/004/600/4600362.jpg?type=r360Fll&amp;v=20210303145028',
    date: '2020.06.19',
    album_type: 'mini',
  },
  {
    id: 2,
    title: '에잇',
    img: 'https://musicmeta-phinf.pstatic.net/album/004/550/4550593.jpg?type=r360Fll&v=20210303143526',
    date: '2020.05.06',
    album_type: 'digital',
  },
  {
    id: 1,
    title: '사랑의 불시착 OST',
    img: 'https://musicmeta-phinf.pstatic.net/album/004/448/4448098.jpg?type=r360Fll&v=20210303130024',
    date: '2020.2.15',
    album_type: 'mini',
  },
]

const filmographyList = [
  {
    id: 4,
    title: '호텔 델루나',
    img: 'http://img.lifestyler.co.kr/uploads/program/cheditor/2019/07/JEMFAWGGWZWCEQJRS1JL_1024x0.jpg',
    date: '2019/07/13 - 2019/09/01',
    home: 'http://program.tving.com/tvn/hoteldelluna?rcnt=1',
  },
  {
    id: 3,
    title: '나의 아저씨',
    img: 'http://img.lifestyler.co.kr/uploads/program/cheditor/2018/03/MTMBYURSDUTYOBJFHJJV.jpg',
    date: '2018/03/21 - 2018/05/17',
    home: 'http://program.tving.com/tvn/mymister?rcnt=1',
  },
  {
    id: 2,
    title: '달의 연인',
    img: 'http://img2.sbs.co.kr/img/sbs/RO/2016/08/12/RO16116109_w1000_h0.jpg',
    date: '2016/08/29 - 2016/11/01일',
    home: 'https://programs.sbs.co.kr/drama/scarletheart/main',
  },
  {
    id: 1,
    title: '프로듀사',
    img: 'https://www.themoviedb.org/t/p/original/pa2lC5R2eiGT9LecBPfa1FSCWUR.jpg',
    date: '2015/05/15 - 2015/06/20',
    home: 'https://program.kbs.co.kr/2tv/drama/produca/pc/index.html',
  },
]
const historyImage = [
  {
    year: 2021,
    imgUrl:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202101/09/071fdf62-b125-4b47-b7b7-b2c9fc56dcf1.jpg',
  },
  {
    year: 2020,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F9999EA335A22D8A62938ED',
  },
  { year: 2019, imgUrl: 'https://t1.daumcdn.net/cfile/blog/1427CD434F56D4CE09' },
  {
    year: 2018,
    imgUrl:
      'https://pds.joongang.co.kr//news/component/htmlphoto_mmdata/201801/11/972313f2-439e-4b77-a29f-395f082644bd.jpg',
  },
  { year: 2017, imgUrl: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2018/11/PS18112800146.jpg' },
  {
    year: 2016,
    imgUrl:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202101/09/071fdf62-b125-4b47-b7b7-b2c9fc56dcf1.jpg',
  },
  { year: 2015, imgUrl: 'https://t1.daumcdn.net/cfile/blog/1427CD434F56D4CE09' },
  {
    year: 2014,
    imgUrl:
      'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile23.uf.tistory.com%2Fimage%2F9999EA335A22D8A62938ED',
  },
  { year: 2013, imgUrl: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2018/11/PS18112800146.jpg' },
  {
    year: 2012,
    imgUrl:
      'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202101/09/071fdf62-b125-4b47-b7b7-b2c9fc56dcf1.jpg',
  },
  { year: 2011, imgUrl: 'https://t1.daumcdn.net/cfile/blog/1427CD434F56D4CE09' },
  { year: 2010, imgUrl: 'https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2018/11/PS18112800146.jpg' },
]
const history = [
  { content: '2020 APAN MUSIC AWARDS 아이돌챔프 인기상 국내 여자 솔로 부문', year: '2021' },
  { content: '제10회 가온차트 뮤직 어워즈 올해의 작사가상', year: '2021' },
  { content: '제10회 가온차트 뮤직 어워즈 올해의 롱런 음원상', year: '2021' },
  { content: '제10회 가온차트 뮤직 어워즈 디지털음원부문 올해의 가수상 5월', year: '2021' },
  { content: '제35회 골든디스크 어워즈 디지털음원부문 대상', year: '2021' },
  { content: '제35회 골든디스크 어워즈 디지털음원부문 본상', year: '2021' },
  { content: '엠넷 아시안 뮤직 어워즈 여자 가수상', year: '2020' },
  { content: '엠넷 아시안 뮤직 어워즈 베스트 보컬 퍼포먼스 솔로', year: '2020' },
  { content: '엠넷 아시안 뮤직 어워즈 베스트 컬래버레이션', year: '2020' },
  { content: '제12회 멜론뮤직어워드 TOP10', year: '2020' },
  { content: '제12회 멜론뮤직어워드 장르상록부문', year: '2020' },
  { content: '제9회 가온차트 뮤직 어워즈 디지털음원부문 올해의 가수상 11월', year: '2020' },
  { content: '제55회 백상예술대상 V LIVE 인기상', year: '2019' },
  { content: '제8회 가온차트 뮤직어워즈 디지털음원부문 올해의 가수상 10월', year: '2019' },
  { content: '제10회 멜론뮤직어워드 뮤직스타일상 R&B소울부문', year: '2018' },
  { content: '아시아 아티스트 어워즈 베스트 액터', year: '2018' },
  { content: '아시아 아티스트 어워즈 배우부문 올해의 아티스트', year: '2018' },
  { content: '아시아 아티스트 어워즈 배우부문 아시아 핫티스트', year: '2018' },
  { content: '아시아 아티스트 어워즈 배우부문 스타페이 인기상', year: '2018' },
  { content: '제6회 아시아태평양 스타 어워즈 중편드라마 여자 최우수연기상', year: '2018' },
  { content: '제15회 한국대중음악상 종합분야 최우수 팝 음반상', year: '2018' },
  { content: '제7회 가온차트 뮤직 어워즈 디지털음원 부문 올해의 가수상 4월', year: '2018' },
  { content: '제7회 가온차트 뮤직 어워즈 디지털음원 부문 올해의 가수상 3월', year: '2018' },
  { content: '제7회 가온차트 뮤직 어워즈 올해의 롱런 음원상', year: '2018' },
  { content: '제7회 가온차트 뮤직 어워즈 올해의 작사가상', year: '2018' },
  { content: '제27회 하이원 서울가요대상 최고앨범상', year: '2018' },
  { content: '제32회 골든디스크 어워즈 디지털음원부문 대상', year: '2018' },
  { content: '제32회 골든디스크 어워즈 디지털음원부문 본상', year: '2018' },
  { content: '제9회 멜론뮤직어워드 올해의 앨범상', year: '2017' },
  { content: '제9회 멜론뮤직어워드 송라이터상', year: '2017' },
  { content: '제9회 멜론뮤직어워드 TOP10', year: '2017' },
  { content: 'Mnet 아시안 뮤직 어워드 여자가수상', year: '2017' },
  { content: 'SAF 연기대상 베스트 커플상', year: '2016' },
  { content: '제13회 한국대중음악상 네티즌이 뽑은 올해의 음악인 여자부문', year: '2016' },
  { content: '제6회 대한민국 대중문화예술상 국무총리표창', year: '2015' },
  { content: 'Mnet 아시안 뮤직 어워드 더 모스트 파퓰러 보컬리스트상', year: '2014' },
  { content: 'Mnet 아시안 뮤직 어워드 여자가수상', year: '2014' },
  { content: '제6회 멜론뮤직어워드 아티스트상', year: '2014' },
  { content: '제6회 멜론뮤직어워드 TOP10', year: '2014' },
  { content: '제3회 가온차트 K-POP 어워드 올해의 가수상 음원부문 10월', year: '2014' },
  { content: 'KBS 연기대상 여자 신인연기상', year: '2013' },
  { content: 'KBS 연기대상 베스트 커플상', year: '2013' },
  { content: '제5회 멜론뮤직어워드 TOP10', year: '2013' },
  { content: '한류 10주년 대상 뮤직대상 여자 솔로아티스트부문', year: '2013' },
  { content: '제27회 일본 골드디스크상 베스트3 뉴아티스트 아시아부문', year: '2013' },
  { content: '제4회 멜론뮤직어워드 TOP10', year: '2012' },
  { content: 'Mnet 아시안 뮤직 어워드 여자솔로상', year: '2012' },
  { content: '제24회 한국PD대상 가수부문 출연자상', year: '2012' },
  { content: '제9회 한국대중음악상 올해의 노래상', year: '2012' },
  { content: '제9회 한국대중음악상 노래부문 최우수 팝 노래상', year: '2012' },
  { content: '제9회 한국대중음악상 네티즌이 뽑은 올해의 여자 아티스트상', year: '2012' },
  { content: '제1회 가온차트 K-POP 어워드 올해의 가수상 음원부문 12월', year: '2012' },
  { content: '제1회 가온차트 K-POP 어워드 올해의 가수상 음원부문 2월', year: '2012' },
  { content: '2011 올케이팝 어워드 여자 솔로 아티스트상', year: '2012' },
  { content: '제21회 하이원 서울가요대상 본상', year: '2012' },
  { content: '제21회 하이원 서울가요대상 최고앨범상', year: '2012' },
  { content: '제7회 아시아 모델상 시상식  BBF 인기가수상', year: '2012' },
  { content: 'Mnet 아시안 뮤직 어워드 베스트 보컬 퍼포먼스 솔로상', year: '2011' },
  { content: '제3회 멜론뮤직어워드 SK플래닛 베스트송상', year: '2011' },
  { content: '제3회 멜론뮤직어워드 TOP10', year: '2011' },
  { content: '제4회 스타일 아이콘 어워드 본상', year: '2011' },
  { content: '한국광고주협회 광고주가 뽑은 좋은 모델상', year: '2011' },
  { content: "제5회 Mnet 20's Choice 핫 CF스타상", year: '2011' },
  { content: '제1회 올레-롯데 스마트폰 영화제 시상식 특별상', year: '2011' },
  { content: '제20회 하이원 서울가요대상 디지털음원상', year: '2011' },
  { content: '제20회 하이원 서울가요대상 본상', year: '2011' },
  { content: 'SBS 연예대상 예능 뉴스타상', year: '2010' },
  { content: '제2회 멜론뮤직어워드 TOP10', year: '2010' },
  { content: '제25회 골든디스크 시상식 디지털음원부문 본상', year: '2010' },
  { content: '제11회 대한민국 영상대전 가수부문 포토제닉상', year: '2010' },
]
const adList = [
  {
    title: 'WAVVE',
    img: 'https://blog.kakaocdn.net/dn/caUjFr/btqWLY51BRz/95Eyf7jQ39xSOCEvvEl5V1/img.jpg',
  },
  {
    title: '반올림피자샵',
    img: 'https://blog.kakaocdn.net/dn/Tgzdb/btqWzsOadXo/C79qtBSudEdU110hSb55BK/img.jpg',
  },
  {
    title: '한두이서',
    img: 'https://blog.kakaocdn.net/dn/nsKgU/btqWKkhrp77/Ak298WfXiSnjxoJUxsIDhk/img.jpg',
  },
  {
    title: 'CNP',
    img: 'https://blog.kakaocdn.net/dn/bcWZps/btqWNdu5yLj/K4EOVBGnOPqYjSzac6UuhK/img.jpg',
  },
  {
    title: '=',
    img: 'https://blog.kakaocdn.net/dn/dE0ORx/btqWGLzDR5I/cCziNhPY6rskhICHmaAUVk/img.jpg',
  },
  {
    title: 'BLACK YAK',
    img: 'https://blog.kakaocdn.net/dn/bikYUd/btqWKYypYle/f2ecoTk1BBOxNlmpHMpAJK/img.jpg',
  },
  {
    title: '이브자리',
    img: 'https://blog.kakaocdn.net/dn/nmgqF/btqWGLNaCvA/KK1AdGJuQeg3K6EGk2yv2K/img.jpg ',
  },
  {
    title: 'W',
    img: 'https://blog.kakaocdn.net/dn/dd3kQI/btqWzurIaxO/Uh9ksoLoTvHydZhDSwprz1/img.jpg',
  },
  {
    title: '그날엔',
    img: 'https://blog.kakaocdn.net/dn/97klF/btqWOfzpTO5/JW3by6M7Yzk0sYdM28OoE0/img.jpg',
  },
  {
    title: '하이트 진로',
    img: 'https://blog.kakaocdn.net/dn/tvQ8y/btqWGLGmnVq/kzkokRp3CNed5OpNwvKBtK/img.jpg ',
  },
  {
    title: '=',
    img: 'https://blog.kakaocdn.net/dn/cegHbd/btqWKku1V2I/Na9ukBtocn1NCJrP0mNKEk/img.jpg',
  },
  {
    title: '삼다수',
    img: 'https://blog.kakaocdn.net/dn/MYtun/btqWzud9Zar/wHfkK9hhttpnkR68HaPN40/img.jpg',
  },
]

const scheduleList = [
  {
    s_id: 1,
    date: '2021-5-9',
    title: 'aaa',
  },
  {
    s_id: 2,
    date: '2021-5-9',
    title: 'sss',
  },
  {
    s_id: 3,
    date: '2021-5-11',
    title: 'ddd',
  },
]

const tvList = [
  {
    id: 1,
    prod: '[TV온에어]',
    title: '하이트진로 참이슬',
    image: 'https://i.imgur.com/SsgijKR.gif',
    date: '(2015 ~ 2018, 2020 ~)',
  },
  {
    id: 2,
    prod: '[TV온에어]',
    title: '경동제약 그날엔 ',
    img: 'https://i.imgur.com/lWJ51Hq.gif',
    date: '(2017 ~)',
  },
]
const categories = ['ALBUM', 'FILMOGRAPHY', 'TV', 'AD', 'HISTORY', 'BOARD']

export { boardList, replyList, filmographyList, categories, history, scheduleList, tvList, adList, historyImage }
