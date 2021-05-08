const boardList= [
    {
      b_id: 1,
      type:'notify',
      title: "사이트 및 게시판 이용 규칙",
      writer: "Admin",
      pass:'1234',
      date: "2021-04-15",
      recommend: "10",
      hit: "81812",
      content: "editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다- <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다- <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다"
    },
      {
      b_id: 2,
      type:'notify',
      title: "아이유 콘서트 개최 - 굿바이 코로나 - 2020.05.01",
      writer: "Admin",
      pass:'1234',
      date: "2021-04-15",
      recommend: "10",
      hit: "81812",
      content: "editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다- <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다- <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다"
  
    },
    {
      b_id: 3,
      type:'default',
      title: "제목3",
      writer: "글쓴이",
      pass:'1234',
      date: "2021-04-15",
      recommend: "10",
      hit: "81812",
      content: "editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다- <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다- <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다"
  
    },
    {
      b_id: 4,
      type:'default',
      title: "제목4",

      writer: "글쓴이1",
      pass:'1234',
      date: "2021-04-15",
      recommend: "10",
      hit: "81812",
      content: "editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다- <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다- <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다"
    },
    {
      b_id: 5,
      type:'default',
      title: "제목5",
      writer: "글쓴이2",
      pass:'1234',
      date: "2021-04-15",
      recommend: "10",
      hit: "81812",
      content: "editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다- <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다- <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다"
    },
    {
      b_id: 6,
      type:'default',
      title: "제목6",
      writer: "글쓴이3",
      pass:'1234',
      date: "2021-04-15",
      recommend: "10",
      hit: "81812",
      content: "editor지시어는 에디터 빌드 (편집기 생성자)을 지정합니다- <br />이 v-model지시문은 즉시 사용 가능한 양방향 데이터 바인딩을 가능하게합니다- <br />config지시자는 에디터 인스턴스에 구성을 통과하는 데 도움이됩니다"
    },
  ]
  const replyList=[{
    r_id:1,
    b_id:1,

    writer: "쓴이",
    content: "리플입니다",
    date: "2021-04-15 09:52",
  },
  {
    r_id:2,
    b_id:1,

    writer: "쓴이1",
    content: "리플입니다1",
    date: "2021-04-15 09:53",
  },

  ]
  const scheduleList=[{
    s_id:1,
    date:'2021-5-9',
    title:'aaa',
  },
  {
    s_id:2,
    date:'2021-5-9',
    title:'sss',
  },
  {
    s_id:3,
    date:'2021-5-11',
    title:'ddd',
  },

  ]


  export default { boardList, replyList,scheduleList } 