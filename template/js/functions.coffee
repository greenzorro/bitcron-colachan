window.onload = ->

    #页面效果
    pageFunc.mainMenu()  #主菜单
    pageFunc.searchForm()  #搜索框
    pageFunc.qrCode()  #二维码
    pageFunc.listType()  #列表页文章增加背景图
    pageFunc.imgContain()  #详情页段落是否包含图片
    pageFunc.movies()  #电影收藏
    pageFunc.works()  #设计作品

    #插件效果
    plugin.fancybox()  #fancybox弹窗相册
    plugin.smoothSlide()  #锚链接平滑移动





#########################################################################
#                                页面效果                                #
#########################################################################

pageFunc = 

    # 主菜单
    mainMenu: ->
        menu = document.getElementsByClassName("header")[0].getElementsByClassName "menu_wrapper"
        menuIcon = document.getElementsByClassName("header")[0].getElementsByClassName "menu"
        # 切换菜单状态
        $(".header .icon-icon_menu").on "click", ->  #点击菜单按钮
            $(menu).toggleClass "menu_wrapper_show" if basic.getWinSize() < 3  #展开/收起菜单
            $(menuIcon).toggleClass "menu_active" if basic.getWinSize() < 3  #展开/收起菜单

    # 搜索框
    searchForm: ->
        inputForm = document.getElementsByClassName("header")[0].getElementsByTagName("input")[0]
        $(".header .search .icon-icon_search").on "click", ->
            thisInput = $(this).parent().find "input"
            if basic.getWinSize() > 4 and $(inputForm).val() isnt ""
                searchKeyword thisInput.val(), thisInput  #搜索跳转
        $(inputForm).focus ->  #输入框获得焦点
            $(".header").addClass "search_on"  #展开搜索框
            $(this).val $(this).val()  #光标移到末尾
        $(inputForm).blur ->  #搜索框失去焦点
            $(".header").removeClass "search_on"  #收起搜索框
        $(inputForm).bind "keyup", ->  #输入框的键盘事件
            searchKeyword $(this).val(), $(this) if event.keyCode is 13  #按下回车键，搜索跳转
        # 搜索跳转
        searchKeyword = (keyword, obj) ->
            window.location = "http://" + window.location.host + "/?s=" + keyword if obj.val().length  #输入框不为空

    # 二维码
    qrCode: ->
        if document.getElementsByClassName("index_header")? and basic.getWinSize() > 4  #PC首页
            $(document).on "click", (e) ->  #点击页面任意位置
                target = $(e.target)
                qr = $(".header .qr")
                if target.hasClass "icon-icon_qr" then qr.addClass "qr_show" else qr.removeClass "qr_show"  #点击图标显示/隐藏二维码

    # 列表页文章增加背景图
    listType: ->
        if document.getElementsByClassName("list")[0]?  #处于列表页
            setBg = ->
                imgs = document.getElementsByClassName "img"
                if basic.getWinSize() < 3  #如果是手机，将封面图作为背景图
                    $(item).css "background-image", "url(#{$(item).attr("bg")})" for item in imgs
                else  #否则清除背景图
                    $(item).removeAttr "style" for item in imgs
            setBg()
            window.onresize = -> setBg()  #改变窗口大小

    # 详情页段落是否包含图片
    imgContain: ->
        if document.getElementsByClassName("detail")[0]?  #处于详情页
            para = document.getElementsByClassName("post_body")[0].getElementsByTagName "p"
            $(item).addClass "img_inside" for item in para when $(item).find("img").length

    # 电影收藏
    movies: ->
        if document.getElementById("movie")? and basic.getWinSize() > 4  #处于电影收藏页面，PC
            $("#movie li h3").hover ->
                $(this).parent().addClass "hover"
            $("#movie li h3").mouseout ->
                $(this).parent().removeClass "hover"

    # 设计作品
    works: ->
        if document.getElementById("works")? and basic.getWinSize() < 3  #在手机上直接展现作品图片，而不是幻灯播放
            $(".pic a.title").remove()
            workItem = document.getElementsByClassName("pic")[0].getElementsByTagName "a"
            $(item).replaceWith "<img src='#{$(item).attr "href"}'>" for item in workItem





#########################################################################
#                                插件效果                                #
#########################################################################

plugin =

    # fancybox弹窗相册
    fancybox: ->
        if document.getElementsByClassName("fancybox")[0]?
            $('.fancybox').fancybox {
                prevEffect : 'none',
                nextEffect : 'none',
                closeBtn  : false,
                arrows    : true,
                nextClick : true
            }

    # 锚链接平滑移动
    smoothSlide: ->
        $("a[href*='#']").click (e) ->
            if location.pathname.replace(/^\//, '') is this.pathname.replace(/^\//, '') and location.hostname is this.hostname
                e.preventDefault()  #防止页面跳动
                hash = this.hash.slice(1)
                if hash.length
                    $target = $("[name=#{hash}]")
                    if $target.length
                        targetOffset = $target.offset().top
                        $("html,body").animate { scrollTop: targetOffset }, 800
                else
                    $("html,body").animate { scrollTop: 0 }, 800





#########################################################################
#                                基础功能                                #
#########################################################################

basic =

    # 获取屏幕宽度，判断设备类型
    getWinSize: ->
        # 响应式断点
        phoneLandscape = 568
        padPortrait = 768
        padLandscape = 1024
        pc = 1200
        winWidth = screen.width
        if winWidth < phoneLandscape then 1  #手机竖屏
        else if winWidth >= phoneLandscape and winWidth < padPortrait then 2  #手机横屏
        else if winWidth >= padPortrait and winWidth < padLandscape then 3  #平板竖屏
        else if winWidth >= padLandscape && winWidth < pc then 4  #平板横屏
        else 5  #PC
