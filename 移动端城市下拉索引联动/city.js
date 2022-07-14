$(function () {


  
  // isAddTk()

  // autoAdHeight('ad');
  // autoHotImgHeight('hotNewsImg');
  // autoCardHeight('head-container')

  //跳转城市页面
  $('#goSelectCity').click(function () {
    window.location.href = 'city.html'
  })
  var url = location.search;
  var theRequest = new Object();
  if (url.indexOf('?') != -1) {
    var str = url.substr(1);
    var strs = str.split('&');
    for (var i = 0; i < strs.length; i++) {
      theRequest[strs[i].split('=')[0]] = (strs[i].split('=')[1]);
    }
    console.log(theRequest.cityCode)
  }
  //模拟数据
  //假设当前定位城市为广州市;
  var localCity = '阿坝藏族羌族自治州';
  $('.cityName').text(pNumber(localCity));
 
  var localArr = null;
  var cardPackage = [
    {
      cityCode: '440100',
      cityName: '阿坝藏族羌族自治州',
      card: [
        {
          cardName: '国家医保电子凭证',
          leftCodeImg: './image/busy.png',
          leftCodeText: '医保凭证码',
          rightCodeImg: './image/busy.png',
          rightCodeText: '医保余额查询',
          ad: [
            {
              imgurl: './image/banner.png'
            },
            
          ],
          fnService: [
            {
              imgurl: './image/iconone.png',
              fnName: '疫情服务'
            },
            {
              imgurl: './image/iconfour.png',
              fnName: '社保交易记录'
            },
            {
              imgurl: './image/icontwo.png',
              fnName: '公积金'
            },
            {
              imgurl: './image/iconthree.png',
              fnName: '医保交易记录'
            }
          ],
          hotNews: [
            {
              imgUrl: './image/picture.png'
            },
            {
              imgUrl: './image/picture.png'
            },
            {
              imgUrl: './image/picture.png'
            },
            {
              imgUrl: './image/picture.png'
            }
          ]
        },
        {
          cardName: '电子社保卡',
          leftCodeImg: './image/busy.png',
          leftCodeText: '电子社保码',
          rightCodeImg: './image/busy.png',
          rightCodeText: '金融支付码',
          ad: [
            {
              imgurl: './image/bkgr_PP0000000006.png'
            },
            {
              imgurl: './image/bkgr_PP0000000013.png'
            },
            {
              imgurl: './image/bkgr_PP0000000012.png'
            }
          ],
          fnService: [
            {
              imgurl: './image/iconone.png',
              fnName: '疫情服务'
            },
            {
              imgurl: './image/iconfour.png',
              fnName: '社保交易记录'
            },
            {
              imgurl: './image/icontwo.png',
              fnName: '公积金'
            },
            {
              imgurl: './image/iconthree.png',
              fnName: '医保交易记录'
            }
          ],
          hotNews: [
            {
              imgUrl: './image/picture.png'
            },
            {
              imgUrl: './image/picture.png'
            },
            {
              imgUrl: './image/picture.png'
            },
            {
              imgUrl: './image/picture.png'
            }
          ]
        },

      ]
    },
  ]
  var cardBox = [
    {
      "actionId": "A0000000001",
      "authorize": "0",
      "cityCode": "0",
      "gpsFlag": "0",
      "imgUri": "xxxxxxxx",
      "mainId": "",
      "mainName": "",
      "maintFlag": "0",
      "menuType": "1",
      "mineFlag": "0",
      "needSign": "0",
      "orderId": "999",
      "osType": "0",
      "ponintByKey": "",
      "projectAction": "",
      "projectDesp": "",
      "projectId": "F0000000001",
      "projectName": "医保凭证码",
      "projectUrl": "",
      "thirdFlag": "0",
      "whiteListFlag": "1"
    },
    {
      "actionId": "A0000000001",
      "authorize": "0",
      "cityCode": "4401",
      "gpsFlag": "0",
      "imgUri": "xxxxxxxx",
      "mainId": "",
      "mainName": "",
      "maintFlag": "0",
      "menuType": "1",
      "mineFlag": "0",
      "needSign": "0",
      "orderId": "998",
      "osType": "0",
      "ponintByKey": "",
      "projectAction": "",
      "projectDesp": "",
      "projectId": "F0000000002",
      "projectName": "医保余额查询",
      "projectUrl": "",
      "thirdFlag": "0",
      "whiteListFlag": "1"
    },
  ]
  cardPackage[0].card.forEach((item, index) => {
    // item.card={
    //   'leftBox':cardBox[0],
    //   'right':cardBox[1]
    // }
    item.leftBox = cardBox[0];
    item.rightBox = cardBox[1]
  })
  console.log(cardPackage)
  //根据定位城市查询
  function searchCity(data, localCity) {
    var arr = null;
    data.forEach((item, index) => {
      if (item.cityName == localCity) {
        arr = item;
      }
    })
    return arr
  }
  localArr = searchCity(cardPackage, localCity);
  console.log(localArr)
  //渲染头部数据

  function renderHtml(localArr) {
    var cardtemplate = '';
    var defaultIndex = 0;
    $('#head-container').html('');
    for (var i = 0; i < localArr.card.length; i++) {
      cardtemplate+="<div class='swiper-slide'>"+
                     "<div class='otitle'><span>"+localArr.card[i].cardName+"</span><div class='cardBtn'>未激活</div></div>"+

                     "<div class='codeBox'>"+
                     " <div class='yibaocode' onclick='clickAction("+JSON.stringify(localArr.card[i].leftBox)+")'>"+
                     " <div class='codeImg'>"+
                     " <img src='./image/code.png' alt=''></div>"+
                     "<div class='text'>"+localArr.card[i].leftBox.projectName+"</div>"+
                     " </div>"+
                     " <div class='yibaomoney' onclick='clickAction("+JSON.stringify(localArr.card[i].rightBox)+")'>"+
                     " <div class='codeImg'>"+
                     " <img src='./image/query.png' alt=''></div>"+
                     "<div class='text'>"+localArr.card[i].rightBox.projectName+"</div>"+
                     " </div>"+
                     "</div>"+
                     "</div>"
    }
    $('#head-container').html(cardtemplate);


    // console.log($('.wiper-wrapper'))
    //头部
    var indexArr = [];//存放索引的数组
    var swiper1 = new Swiper('.swiper-container', {
      initialSlide: defaultIndex,

      centeredSlides: true,

      watchSlidesProgress: true,

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          var paginationHtml = " ";
          for (var i = 0; i < total; i++) {
            // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
            if (i === (current - 1)) {
              paginationHtml += '<span class="swiper-pagination-hdcustoms swiper-pagination-hdcustoms-active"></span>';
            } else {
              paginationHtml += '<span class="swiper-pagination-hdcustoms"></span>';
            }
          }
          return paginationHtml;
        },
      },


      slidesPerView: 1.064,

      spaceBetween: 12,
      touchAngle: 20,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: true,
      //   },
      // loop: true,
      on: {

        slideChangeTransitionEnd: function () {
          // console.log(this.realIndex);
          indexArr.push(this.realIndex);
          defaultIndex = this.realIndex;
          console.log(defaultIndex)
          if (indexArr[indexArr.length - 2] === indexArr[indexArr.length - 1]) {
            return;
          } else {
            openLoad();
            setTimeout(() => {
              console.log(this.realIndex)
              // console.log(this.realIndex)
              renderCardData(this.realIndex);
            }, 100);

            setTimeout(() => {
              $('#intk').css({
                'display': 'none'
              })
              $('#tk-load').css({
                'display': 'none'
              })
            }, 500);
          }
        }
      },

    });
  }
  //渲染头部卡片以下的数据
  var swiper2 = 0;
  
  function renderCardData(activeIndex) {
    // console.log(cardPackage[0].card[activeIndex])
    //广告banner渲染
    var template = ''
    $('#ad-container').html('')
    for (var i = 0; i < cardPackage[0].card[activeIndex].ad.length; i++) {
      template += "<div class='swiper-slide' >" +
        "  <img src=" + cardPackage[0].card[activeIndex].ad[i].imgurl + " class='adimg' /></div>"
    }
    $('#ad-container').html(template);

    if (swiper2 !== 0) {
      swiper2.destroy();
    }
    //广告
    swiper2 = new Swiper('#ad ', {
      initialSlide: 0,
      slidesPerView: 'auto',
      centeredSlides: true,
      watchSlidesProgress: true,
      updateOnImagesReady: true,
      pagination: {
        el: '.pagination',
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
          var paginationHtml = " ";
          for (var i = 0; i < total; i++) {
            console.log(total);
            
            // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
            if (i === (current - 1)) {
              paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
              paginationHtml += '<span class="swiper-pagination-customs"></span>';
            }
          }
          return paginationHtml;
        },
      },
      loop: true,

      autoplay: $(".adimg").length>1,
      on: {
        click: function (e) {
          console.log(e)
        }
      }
    });
    //功能服务
    var fntemplate = '';
    $('.fnList').html('')
    for (var i = 0; i < cardPackage[0].card[activeIndex].fnService.length; i++) {
      fntemplate += "<div class='list-item' onclick='fnClick(" + JSON.stringify(cardPackage[0].card[activeIndex].fnService[i]) + ")' >" +
        "<div class='itemLeft'>" +
        "<img src=" + cardPackage[0].card[activeIndex].fnService[i].imgurl + " alt=''></div>" +
        " <div class='itemrigth'>" + cardPackage[0].card[activeIndex].fnService[i].fnName + "</div>" +
        "</div>";

    }
    if (fntemplate != null && fntemplate != '') {
    
      $('.fnList').html(fntemplate);
     
  
    
      }

    $('.fnList').html(fntemplate)
  


 
  }

  renderHtml(localArr);
  //渲染热点资讯

});


//打开加载中提示
function openLoad() {
  var loadht = "<div id='tk-load' class='tkcommon'  >" +
    "	<div class='loadimg'  >" +
    "		<input type='image' class=' img-animation' style='' src='./image/loading.png' />" +
    "	</div>" +
    "</div>";
  // console.log(loadht)
  getIntk('tk-load', loadht);
}
function clickAction(g) {
  console.log(g)
}
//点击功能服务
function fnClick(d) {
  console.log(d)
}
//省略字符串
function pNumber(str) {

  if (str.length > 4)

    str = str.substring(0, 3) + '...';//控制显示40个字符+....；

  return str;

}
function autoAdHeight(el){
  var w = $("#" + el).width();
  var h = Number(w) * 0.295;
  // console.log(w,h)
  $("#" + el).height(h)

}
function autoHotImgHeight(imgEl){
 
  var w = Math.floor($('.'+imgEl).width());
  $('.'+imgEl).width(w)
  console.log(w)
  var h = w * 0.804;
  console.log(h)
 
  $("." + imgEl).height(h)
  $("#" + imgEl).height(w)
}
function autoCardHeight(el){
  console.log(el);
  var w = Math.floor($('#'+el).width()*0.35);
  console.log(w);
  // 
}