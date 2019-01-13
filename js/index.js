var bookdatas = [
   {
      name: "山羌圖書館",
      author:"連俞涵",
      pulish_house:"凱特文化",
      image:"http://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/077/82/0010778245.jpg&v=5a6ef803&w=348&h=348",
      price:340,
      is_discount: true,
      discount: 0.7,
      link_book: "https://www.books.com.tw/products/0010778245?loc=P_011_002",
      link_author:"https://search.books.com.tw/search/query/key/連俞涵/adv_author/1/",
      date:"2018/02/14"
      
   },{
      name: "溺日",
      author:"黃繭",
      pulish_house:"時報出版",
      image:"http://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/079/87/0010798773.jpg&v=5b9101de&w=348&h=348",
      price:350,
      is_discount: true,
      discount: 0.79,
      link_book: "https://www.books.com.tw/products/0010798773",
      link_author:"https://search.books.com.tw/search/query/key/黃繭/adv_author/1/",
      date:"2018/09/25"
   },{
      name: "有限溫存",
      author:"亦舒",
      pulish_house:"天地圖書",
      image:"http://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/080/45/0010804593.jpg&v=5be15f40&w=348&h=348",
      price:350,
      is_discount: true,
      discount: 0.79,
      link_book: "https://www.books.com.tw/products/0010804593?loc=P_011_009",
                         link_author:"https://search.books.com.tw/search/query/key/亦舒/adv_author/1/",
      date:"2018/11/09"
   },{
    name: "好音樂的科學：破解基礎樂理和美妙旋律的音階秘密",
    author: "約翰‧包威爾",
    publish_house: "大寫出版 ",
    image: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/071/87/0010718777.jpg&v=5756a26b&w=348&h=348",
    price: 350,
    is_discount: false,
    discount: 0.79,
    link_book: "https://www.books.com.tw/products/0010718777?loc=P_003_003",
    link_author:
    "https://search.books.com.tw/exep/prod_search.php?key=%E7%B4%84%E7%BF%B0%E2%80%A7%E5%8C%85%E5%A8%81%E7%88%BE&f=author",
    date: "2016/06/21"
  },,{
    name: "Design by wangzhihong.com：A Selection of Book Designs, 2001-2016(王志弘作品選2001-2016)",
    author: "王志弘",
    publish_house: "臉譜",
    image: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/072/55/0010725522.jpg&v=57b6fbcb&w=348&h=348",
    price: 3000,
    is_discount: true,
    discount: 0.79,
    link_book: "https://www.books.com.tw/products/0010725522?loc=P_003_004",
    link_author:
    "https://search.books.com.tw/exep/prod_search.php?key=%E7%8E%8B%E5%BF%97%E5%BC%98&f=author",
    date: "2016/09/01"
  },{
    name: "手寫英文書法聖經：從握筆、筆順到數字、符號，全方位掌握藝術美字書寫技法。",
    author: "Julien Chazal",
    publish_house: "野人",
    image: "https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/071/98/0010719843.jpg&v=57c7bcda&w=348&h=348",
    price: 665,
    is_discount: true,
    discount: 0.75,
    link_book: "https://www.books.com.tw/products/0010719843?loc=P_003_005",
    link_author:
    "https://search.books.com.tw/exep/prod_search.php?key=Julien+Chazal&f=author",
    date: "2016/09/07"
  },{
    name: "手寫美「行」：鋼筆字冠軍的日常行書超值套組《手寫美「行」》+《美「行」小練習》【博客來獨家德國e+m原木筆桿&日本NIKKO沾水筆尖&鋼筆紙箋（Conifer／珠友文化隨機出貨）】",
    author: "葉曄",
    publish_house: "遠流",
    image: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/072/35/0010723527_b_01.jpg&v=579b5a78&w=348&h=348",
    price: 520,
    is_discount: false,
    discount: 0.75,
    link_book: "https://www.books.com.tw/products/0010723527?loc=P_003_006",
    link_author:
    "https://search.books.com.tw/exep/prod_search.php?key=%E8%91%89%E6%9B%84&f=author",
    date: "2016/08/05"
  },{
    name: "Typography 字誌：Issue 02 來做LOGO吧！",
    author: "Graphic社編輯部",
    publish_house: "臉譜",
    image: "https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/072/92/0010729204.jpg&v=57e27d49&w=348&h=348",
    price: 420,
    is_discount: true,
    discount: 0.79,
    link_book: "https://www.books.com.tw/products/0010729204?loc=P_003_007",
    link_author:
    "https://search.books.com.tw/exep/prod_search.php?key=Graphic%E7%A4%BE%E7%B7%A8%E8%BC%AF%E9%83%A8&f=author",
    date: "2016/10/06"
  }
];


var vm = new Vue({
   el: '#app',
   data: {
      books: bookdatas
   }
})