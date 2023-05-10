
// 青いユニフォームの人t
let goalt = 0;//t選手のゴールの数
let savet = 0;//t選手のシュートを止められた数
let shuutot = 0;
let fightt = goalt + savet + shuutot;//t選手のpk戦をした数
let moneyt = 1;



// let rt1 = "";
// let rt2 = 0;
// let rk1 = "";
// let rk2 = 0;

// 配列で条件
const red37= [1, 3, 5, 7, 9, 11,13,15,17,18,19,21,23,25,27,29,31,33,35];
const black38 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];

const oneThird39 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const oneThird40 = [13, 14, 15, 16, 17, 18,19, 20, 21, 22, 23, 24];
const oneThird41 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

const half42 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const half43 = [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

// 赤いユニフォームの人k
let goalk = 0;//t選手のゴールの数
let savek = 0;//t選手のシュートを止められた数
let shuutok = 0;
let fightk = goalk + savek + shuutok;//t選手のpk戦をした数
let moneyk = 1;


$(".k").hide();//k選手をはじめ隠しておく指示のち、ボタンで切り替えて出していく
$(".c").hide();
$(".t_money").text("1ドル");
$(".k_money").text("1ドル");

// 最終結果　ゴール数の多さで判定

 for (let i = 1; i <= 36; i++) {
    $("#kajino_t").append(`<option value="${i}">${i}</option>`);

    $("#kajino_k").append(`<option value="${i}">${i}</option>`);

    $(`p[value=${i}t]`).prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    
    $(`p[value=${i}t] .soccer_ball_img`).hide('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');

};

let selectedNumberT = parseInt($("#kajino_t").val());
let selectedNumberK = parseInt($("#kajino_k").val());

function LastResult() {
    if (moneyk > moneyt) {
        $("#last_result2").text("k選手の勝利");
    } else if (moneyk < moneyt) {
        $("#last_result2").text("t選手の勝利");
    } else {
        $("#last_result2").text("引き分け");
    }
};

// ボタンを一時的に使用できないようにする機能
$("#player_btn_ta").prop("disabled", true);
$("#player_btn_ka").prop("disabled", true);

// 1 配列が１から９の数字がある
// 2 1から9の数字から一つ選ぶ
// 3 選んだ数字をrt１として扱う
// 4 redなら配列で処理する
$("#submit_t").click(function () {

    selectedNumberT = parseInt($("#kajino_t").val());
    alert("シュートを押して！！");
    $("#player_btn_ta").prop("disabled", false);
    $(this).prop("disabled", true);
    $("#submit_k").removeClass("btn_off");
    $(this).addClass("btn_off");



    
 



});


$("#player_btn_ta").click(function () {
    // 自動で生成する数字 コンピュータ 1-2
    let rt = (Math.floor(Math.random() * 36) + 1);
    // キーパーの動き
    // 自分で選ぶ設定にして同じ数字を当てたら失点
    let rgkk = (Math.floor(Math.random() * 36) + 1);
    // // 得点に関する条件
    // ①kキーパーがtの選んだ数字を当てたらk選手が９倍
    if (selectedNumberT === rgkk) {
        $("#result").text("ナイスセーブ！！！");
        $("#player_btn_ta_result").text("残念");
        $(".gozira")
        moneyk *= 36;
        savet++;
        // ②t選手がrと同じ数字を当てたらt選手のお金が９倍
    } else if (selectedNumberT === rt) {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ta_result").text("36倍");
        moneyt *= 36;
        goalt++;
        alert(rt);
        // 赤を選択 奇数を当てる場合確率５０％
    } else if (selectedNumberT === 37 && red37.includes(rt)) {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ta_result").text("2倍");
        moneyt *= 2;
        goalt++;
        alert(rt);

     } else if (selectedNumberT === 38 && black38.includes(rt)) {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ta_result").text("2倍");
        moneyt *= 2;
        goalt++;
        alert(rt);
    
    } else if (selectedNumberT === 39 && oneThird39.includes(rt)) {
        $("#result").text("GOAL!!!!");
        $("#player_btn_ta_result").text("3倍");
        moneyt *= 3;
        goalt++;
        alert(rt);
    } else if (selectedNumberT === 40 && oneThird40.includes(rt)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ta_result").text("3倍");
            moneyt *= 3;
            goalt++;
            alert(rt);
    } else if (selectedNumberT === 41 && oneThird41.includes(rt)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ta_result").text("3倍");
            moneyt *= 3;
            goalt++;
            alert(rt);
    } else if (selectedNumberT === 42 && half42.includes(rt)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ta_result").text("2倍");
            moneyt *= 2;
            goalt++;
            alert(rt);
    } else if (selectedNumberT === 43 && half43.includes(rt)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ta_result").text("2倍");
            moneyt *= 2;
            goalt++;
            alert(rt);
            // ③誰も当たらない場合、プラスマイナス０（外したら賭け金分マイナスの設定ができたらいい）
    } else {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ta_result").text("NOTGET");
            moneyt -= 0;
            goalt++;
            alert(rt);
        };

        setTimeout(function () {
            $("#player_btn_ta_result").text("???");
        }, 2500);
       

        //ゴール数のカウントと表示
        fightt = goalt + savet + shuutot;
        $("#score_t").text(`${goalt}` + "ゴール/" + `${fightt}` + "回中");
        $(".t_money").text(`${moneyt}` + "ドル");

       
       
        if (fightk >= 10 && fightt >= 10) {

            $(".k").hide(500);
            $(".t").hide(500);
            $(".c").show(500);
setTimeout(function () {
            LastResult();
            }, 2000);
            
        } else {
            setTimeout(function () {
            $(".t").hide(300);
            $(".k").show(300);
            }, 2000);
        };
    
        $(this).prop("disabled", true);
       
        setTimeout(function () {
            $(this).prop("disabled", false);
            $("#submit_t").prop("disabled", false);
        }, 2000);


     // ボールが版に表示される設定
    for (let i = 1; i <= 36; i++) {
        if (selectedNumberT === i && selectedNumberT === rt) {
            $(`p[value=${rt}t] .soccer_ball_img`).show('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
        }
    };
// _____________________________________________
    for (let u = 0; u <= 17; u++) {
        if (selectedNumberT === 37 && red37.includes(rt)) {
             $(`p[value={u}t]`).show('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
          }
    };
// -----------------------------------------------------
    });


// __________________________________________________
// 選手の切り替えtからk
// $("#player_btn_tb").click(function () {
// });
$("#submit_k").click(function () {
    selectedNumberK = parseInt($("#kajino_k").val());

    $("#player_btn_ka").prop("disabled", false);
    $(this).prop("disabled", true);
    alert("シュートを押して！！");
    $("#submit_t").removeClass("btn_off");
    $(this).addClass("btn_off");

});


// t選手のシュート
$("#player_btn_ka").click(function () {

    let rk = (Math.floor(Math.random() * 36) + 1);

    // キーパーの動き
    let rgkt = (Math.floor(Math.random() * 36) + 1);


    for (let i = 1; i <= 36; i++) {

        if (selectedNumberK === i && selectedNumberK === rk) {
            $(`p[value=${rk}k] .soccer_ball_img`).show('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">')
        };
     };

        // 勝ち負けの判定
        if (selectedNumberK === rgkt) {
            $("#result").text("ナイスセーブ！！！");
            $("#player_btn_ta_result").text("残念");
            moneyt *= 36;
            savek++;
            alert(rk);
            // ②k選手がrと同じ数字を当てたらk選手のお金が倍
        } else if (selectedNumberK === rk) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("36倍");
            moneyk *= 36;
            goalk++;
            alert(rk);
            // 赤を選択 奇数を当てる場合確率５０％
        } else if (selectedNumberK === 37 && red37.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("2倍");
            moneyk *= 2;
            goalk++;
            alert(rk);
        } else if (selectedNumberK === 38 && black38.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("2倍");
            moneyk *= 2;
            goalk++;
            alert(rk);
        } else if (selectedNumberK === 39 && oneThird39.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("3倍");
            moneyk *= 3;
            goalk++;
            alert(rk);
        } else if (selectedNumberK === 40 && oneThird40.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("3倍");
            moneyk *= 3;
            goalk++;
            alert(rk);
        } else if (selectedNumberK === 41 && oneThird41.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("3倍");
            moneyk *= 3;
            goalk++;
            alert(rk);
        } else if (selectedNumberK === 42 && half42.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("2倍");
            moneyk *= 2;
            goalk++;
            alert(rk);
        } else if (selectedNumberK === 43 && half43.includes(rk)) {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ta_result").text("2倍");
            moneyk *= 2;
            goalk++;
            alert(rk);
            // ③誰も当たらない場合、プラスマイナス０（外したら賭け金分マイナスの設定ができたらいい）
        } else {
            $("#result").text("GOAL!!!!");
            $("#player_btn_ka_result").text("NOTGET");
            moneyk -= 0;
            goalk++;
            alert(rk);
        };



        setTimeout(function () {
            $("#player_btn_ka_result").text("???");
        }, 2500);
        //ゴール数のカウントと表示
        fightk = goalk + savek + shuutok;
        $("#score_k").text(`${goalk}` + "ゴール/" + `${fightk}` + "回中");
        $(".k_money").text(`${moneyk}` + "ドル");
        // 選手の切り替えkからt

        // お互いのシュート数が１０以上になったらの条件
    if (fightk >= 10 && fightt >= 10) {

            $(".k").hide(500);
            $(".t").hide(500);
            $(".c").show(3000);

            setTimeout(function () {
            LastResult(3000);
            }, 2000);
    } else {
            setTimeout(function () {
                $(".k").hide(500);
                $(".t").show(500);
            }, 5000);
    };

    
    $(this).prop("disabled", true);
    
    setTimeout(function () {
        $(this).prop("disabled", false);
        $("#submit_k").prop("disabled", false);
    }, 2000);
});




   //     if (rt1 === 1 && rt1 === r) {
    //         $("p[value=1t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 2 && rt1 === r) {
    //         $("p[value=2t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 3 && rt1 === r) {
    //         $("p[value=3t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 4 && rt1 === r) {
    //         $("p[value=4t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 5 && rt1 === r) {
    //         $("p[value=5t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 6 && rt1 === r) {
    //      $("p[value=6t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 7 && rt1 === r) {
    //        $("p[value=7t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if (rt1 === 8 && rt1 === r) {
    //       $("p[value=8t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');
    //     } else if(rt1 === 9 && rt1 === r){
    //         $("p[value=9t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');


    //     } else if(rt1 === 9 && rt1 === r){
    //         $("p[value=9t]").prepend('<img class="soccer_ball_img" src="/img/soccer_ball-1.jpg" alt="サッカーボール">');