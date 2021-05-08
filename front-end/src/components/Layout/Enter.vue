<template>
  <div class="enter">
    <div class="cover">
      <div class="string">
        <span class="days"> With U,<br /> </span>
        IU<br />
        <br />
        <span class="days">
          BDAY 1993.05.16 <br />
          Debuet 2008.09.23 <br />
          WITH 4063
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
.enter {
  margin-bottom: 300px;
  padding-bottom: 100px;
}
.cover {
  background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 1) 92%,
      rgba(2, 0, 36, 1) 100%
    ),
    url('../../assets/img/Lilac.jpg');
  // 순서는 반드시 url이 뒤에 와야 한다. 순서가 바뀌면 그라데이션 적용이 되지 않기 때문
  background-size: cover;
  height: 360px;
  width: 360px;
  margin: 0 auto;
  margin: 300px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.string {
  text-align: end;
  color: white;
  font-style: italic;
  margin-right: 20px;
}
.days {
  font-size: 9px;
  opacity: 70%;
}
</style>
