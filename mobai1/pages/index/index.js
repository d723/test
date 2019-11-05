// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    wx.getSystemInfo({
      success: function(res) {
        console.log(res.windowHeight);
        that.setData({
          wh: res.windowHeight
        });
      },
    })
  },
  scan(){
    wx.showLoading({
      title: '正在开锁',
    })
    wx.scanCode({
      onlyFromCamera:true,
      scanType:'qrCode',
      success(res){
        //api
        console.log(res.result);
        wx.hideLoading()
      }
    })
  },
  getMyLocation(){
    var that=this;
    wx.getLocation({
      success: function (res) {
        console.log(res.latitude, res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;
    wx.getLocation({
      success: function(res) {
        console.log(res.latitude, res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})