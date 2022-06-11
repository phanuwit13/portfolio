<script>
  const me = 'image/me.png'
  const Age = () => {
    var birthday = new Date('1998', '11', '26'), //Year, month-1 , day.
      today = new Date(),
      one_year = 1000 * 60 * 60 * 24 * 365
    return Math.floor((today.getTime() - birthday.getTime()) / one_year)
  }
</script>

<div class="row p-2 mb-4">
  <div
    class="banner-details col-12 col-md-7 d-flex justify-content-end align-items-center flex-column px-4 gap-4 text-focus-in"
  >
    <div class="title">Welcome to my site !!</div>
    <div class="fs-3 text-pre-line text-center">
      {"Hi, I'm Phanuwit. \n A passionate web developer"}
    </div>
    <div class="fs-6">
      I'm {Age()} year old, I'm web developer graduated computer engineering from
      rajamangala university of technology isan ,I'm looking for a position that
      challenging such as web developer in the well known organizations or company
      so i could use my knowledge that l have learned to develop the company, including
      myself.
    </div>
  </div>
  <div class="col-12 col-md-5 px-4 mt-4 mt-md-0">
    <div class="img-card fade-in-right">
      <img class="img-profile" src={me} alt="" />
    </div>
  </div>
</div>

<style>
  :global(body.dark-mode) {
    background-color: #212327 !important;
  }
  .title {
    font-size: 3.5rem;
    font-weight: 600;
  }
  .img-card {
    background-color: #dfe6ee;
    box-shadow: 23px 30px 0px rgba(0, 0, 0, 0.07);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
  }
  :global(body.dark-mode) .img-card {
    background-color: #343434 !important;
    box-shadow: 23px 30px 0px rgba(52, 52, 52, 0.5);
  }
  .img-profile {
    width: 300px;
  }
  .banner-details {
    color: #212529;
  }
  :global(body.dark-mode) .banner-details {
    color: #f8f9fa;
  }
  .fancy {
    font-size: 2.5rem;
  }

  .fade-in-right {
    -webkit-animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: fade-in-right 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .text-focus-in {
    -webkit-animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53)
      both;
    animation: text-focus-in 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  }
  @-webkit-keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-right {
    0% {
      -webkit-transform: translateX(50px);
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      opacity: 1;
    }
  }

  @-webkit-keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
  @keyframes text-focus-in {
    0% {
      -webkit-filter: blur(12px);
      filter: blur(12px);
      opacity: 0;
    }
    100% {
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
</style>
