
// 青いユニフォームの人t
let goalt = 0;//t選手のゴールの数
let savet = 0;//t選手のシュートを止められた数
let shuutot = 0;
let fightt = goalt + savet + shuutot;//t選手のpk戦をした数
let moneyt = 1;


// 赤いユニフォームの人k
let goalk = 0;//t選手のゴールの数
let savek = 0;//t選手のシュートを止められた数
let shuutok = 0;
let fightk = goalk + savek + shuutok;//t選手のpk戦をした数
let moneyk = 1;
let rt;
$(".k").hide();//k選手をはじめ隠しておく指示のち、ボタンで切り替えて出していく
$(".c").hide();
$("#t_money").text("1ドル");
$("#k_money").text("1ドル");

// 最終結果　ゴール数の多さで判定

function LastResult() {
    if (goalk > goalt) {
        $("#last_result2").text("k選手の勝利");
    } else if (goalk < goalt) {
        $("#last_result2").text("t選手の勝利");
    } else {
        $("#last_result2").text("引き分け");
    }
};

$("#player_btn_ta").prop("disabled", true);
$("#player_btn_ka").prop("disabled", true);


// 1 配列が１から９の数字がある
// 2 1から9の数字から一つ選ぶ
// 3 選んだ数字をrtとして扱う
$("#submit_t").click(function () {
    const selectedNumberT = parseInt($("#kajino_t").val());
    if (selectedNumberT >= 1 && selectedNumberT <= 9) {
        rt = selectedNumberT;
    } else {
        rt = "";
    }

    $("#player_btn_ta").prop("disabled", false);

    $(this).prop("disabled", true);
});


   $("#player_btn_ta").click(function () {
    // 自動で生成する数字
    let r = Math.floor(Math.random() * 9);

    // const rt = Math.floor(Math.random() * 9);
    // ボールが版に表示される設定
    if (rt === 1 && rt === r) {
        $("p[value=1t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 2 && rt === r) {
        $("p[value=2t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 3 && rt === r) {
        $("p[value=3t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 4 && rt === r) {
        $("p[value=4t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 5 && rt === r) {
        $("p[value=5t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 6 && rt === r) {
     $("p[value=6t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 7 && rt === r) {
       $("p[value=7t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if (rt === 8 && rt === r) {
      $("p[value=8t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    } else if(rt === 9 && rt === r){
        $("p[value=9t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    }

    // キーパーの動き
    // 自分で選ぶ設定にして同じ数字を当てたら失点
    const rgkk = Math.floor(Math.random() * 9);

    // 勝ち負けの判定選手とキーパーの数字が同じならセーブ

    // ①kキーパーがtの選んだ数字を当てたらk選手が９倍
    if (rt === rgkk) {
        $("#result").text("ナイスセーブ！！！");
        $("#player_btn_ta_result").text("残念");
        moneyk *= 9;
        savet++;
    // ②t選手がrと同じ数字を当てたらt選手のお金が９倍
    } else if (rt === r) {
         $("#result").text("GOAL!!!!");
        $("#player_btn_ta_result").text("９倍");
        moneyt *= 9;
        goalt++;
        // ③誰も当たらない場合、プラスマイナス０（外したら賭け金分マイナスの設定ができたらいい）
    } else {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ta_result").text("お金は増えず、、");
        moneyt -= 0;
        goalt++;
    };

     //ゴール数のカウントと表示
    fightt = goalt + savet + shuutot;
    $("#score_t").text("t選手現在" + `${goalt}` + "ゴール/" + `${fightt}` + "回中");
    $("#t_money").text(`${moneyt}` + "ドル");

       
       
       if (fightk >= 10 && fightt >= 10) {

        $(".k").hide(1000);
        $(".t").hide(1000);
        $(".c").show(1000);

         LastResult();
        }else {
       setTimeout(function() {
       $(".t").hide(1000);
       $(".k").show(1000);
    }, 2000);
       };
       
    
       $(this).prop("disabled", true);
       
       
    setTimeout(function() {
    $(this).prop("disabled", false);
    $("#submit_t").prop("disabled", false);}, 2000);

});

// __________________________________________________
// 選手の切り替えtからk
// $("#player_btn_tb").click(function () {
// });


$("#submit_k").click(function () {
    const selectedNumberK = parseInt($("#kajino_k").val());
    if (selectedNumberK >= 1 && selectedNumberK <= 9) {
        rk = selectedNumberK;
    } else {
        rk = "";
    }
    $("#player_btn_ka").prop("disabled", false);
    $(this).prop("disabled", true);
    setTimeout(function() {
    $(this).prop("disabled", false);
  }, 2000);
});
// t選手のシュート
$("#player_btn_ka").click(function () {

    let r = Math.floor(Math.random() * 9);

   if (rk === 1 && rk === r) {
    $("p[value=1k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 2 && rk === r) {
    $("p[value=2k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 3 && rk === r) {
    $("p[value=3k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 4 && rk === r) {
    $("p[value=4k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 5 && rk === r) {
    $("p[value=5k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 6 && rk === r) {
    $("p[value=6k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 7 && rk === r) {
    $("p[value=7k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 8 && rk === r) {
    $("p[value=8k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
} else if (rk === 9 && rk === r){
    $("p[value=9k]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
}

   
    
    
    // キーパーの動き
    const rgkt = Math.floor(Math.random() * 9);
    


    // 勝ち負けの判定
    if (rk === rgkt) {
        $("#result").text("ナイスセーブ！！！");
        $("#player_btn_ka_result").text("残念");
        moneyt *= 9;
        savek++;
    // ②t選手がrと同じ数字を当てたらt選手のお金が９倍
    } else if (rk === r) {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ka_result").text("９倍");
        moneyk *= 9;
        goalk++;

        // ③誰も当たらない場合、プラスマイナス０（外したら賭け金分マイナスの設定ができたらいい）
    } else {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ka_result").text("お金は増えず、、");
        moneyk -= 0;
        goalk++;
    };
    //ゴール数のカウントと表示
    fightk = goalk + savek + shuutok;
    $("#score_k").text("k選手現在" + `${goalk}` + "ゴール/" + `${fightk}` + "回中");
    // 選手の切り替えkからt

// お互いのシュート数が１０以上になったらの条件
    if (fightk >= 10 && fightt >= 10) {

        $(".k").hide(1000);
        $(".t").hide(1000);
        $(".c").show(1000);

        LastResult();
    } else {
        setTimeout(function () {
            $(".k").hide(1000);
            $(".t").show(1000);
        }, 3000);
    }

    $(this).prop("disabled", true);
    setTimeout(function() {
    $(this).prop("disabled", false);
  }, 2000);
});