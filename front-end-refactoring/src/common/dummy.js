const boardList = [
  {
    b_id: 1,
    title: '제목1',
    writer: '글쓴이',
    date: '21.04.15',
    recommend: '10',
    hit: '81812',
    content:
      'editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다. <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다. <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다',
  },
  {
    b_id: 2,
    title: '제목2',
    writer: '글쓴이',
    date: '21.04.15',
    recommend: '10',
    hit: '81812',
    content:
      'editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다. <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다. <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다',
  },
  {
    b_id: 3,
    title: '제목3',
    writer: '글쓴이',
    date: '21.04.15',
    recommend: '10',
    hit: '81812',
    content:
      'editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다. <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다. <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다',
  },
  {
    b_id: 4,
    title: '제목4',
    writer: '글쓴이1',
    date: '21.04.15',
    recommend: '10',
    hit: '81812',
    content:
      'editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다. <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다. <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다',
  },
  {
    b_id: 5,
    title: '제목5',
    writer: '글쓴이2',
    date: '21.04.15',
    recommend: '10',
    hit: '81812',
    content:
      'editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다. <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다. <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다',
  },
  {
    b_id: 6,
    title: '제목6',
    writer: '글쓴이3',
    date: '21.04.15',
    recommend: '10',
    hit: '81812',
    content:
      'editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다. <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다. <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다',
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

const history = [
  '2021 - 2020 APAN MUSIC AWARDS 아이돌챔프 인기상 국내 여자 솔로 부문',
  '2021 - 제10회 가온차트 뮤직 어워즈 올해의 작사가상',
  '2021 - 제10회 가온차트 뮤직 어워즈 올해의 롱런 음원상',
  '2021 - 제10회 가온차트 뮤직 어워즈 디지털음원부문 올해의 가수상 5월',
  '2021 - 제35회 골든디스크 어워즈 디지털음원부문 대상',
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

const categories = ['ALBUM', 'FILMOGRAPHY', 'TV', 'AD', 'HISTORY', 'BOARD']

export { boardList, replyList, albumList, filmographyList, categories, history, scheduleList }
