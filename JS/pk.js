let goalt = 0;
let savet = 0;
let fightt = goalt + savet;
let goalk = 0;
let savek = 0;
let fightk = goalk + savek;

$(".k").hide();

// 青いユニフォームの人t
// playerの設定数字はゴールのどこに飛ぶかの設定
// ランダムシュート
$("#player_btn_ta").click(function () {
    const rt = Math.floor(Math.random() * 9);
    if(rt === 1) {
        $("p[value=1t]").css(`background`, 'red');
    } else if (rt === 2) {
        $("p[value=2t]").css(`background`, 'red');
    } else if (rt === 3) {
        $("p[value=3t]").css(`background`, 'red');
    } else if (rt === 4) {
        $("p[value=4t]").css(`background`, 'red');
    } else if (rt === 5) {
        $("p[value=5t]").css(`background`, 'red');
    } else if (rt === 6) {
        $("p[value=6t]").css(`background`, 'red');
    } else if (rt === 7) {
        $("p[value=7t]").css(`background`, 'red');
    } else if (rt === 8) {
        $("p[value=8t]").css(`background`, 'red');
    } else {
        $("p[value=0t]").css(`background`, 'red');
    }

    // キーパーの動き
    const kt = Math.floor(Math.random() * 9);

    // 勝ち負けの判定
    if (kt === rt) {
        $("#result_t").text("ナイスセーブ！！！");
        savet++;
    } else {

        goalt++;
    };
    fightt = goalt + savet;
    $("#score_t").text("t選手現在" + `${goalt}` + "ゴール/" + `${fightt}` + "回中");
});

$("#player_btn_tb").click(function () {
    $(".t").hide(1000);
    $(".k").show(1000);
});


// 赤ユニフォームの人k
$("#player_btn_ka").click(function () {
    const rk = Math.floor(Math.random() * 9);
    if (rk === 1) {
        $("p[value=1k]").css(`background`, 'red');
    } else if (rk === 2) {
        $("p[value=2k]").css(`background`, 'red');
    } else if (rk === 3) {
        $("p[value=3k]").css(`background`, 'red');
    } else if (rk === 4) {
        $("p[value=4k]").css(`background`, 'red');
    } else if (rk === 5) {
        $("p[value=5k]").css(`background`, 'red');
    } else if (rk === 6) {
        $("p[value=6k]").css(`background`, 'red');
    } else if (rk === 7) {
        $("p[value=7k]").css(`background`, 'red');
    } else if (rk === 8) {
        $("p[value=8k]").css(`background`, 'red');
    } else {
        $("p[value=0k]").css(`background`, 'red');
    }

    // キーパーの動き
    const kk = Math.floor(Math.random() * 9);

    // 勝ち負けの判定
    if (kk === rk) {
        $("#result_k").text("ナイスセーブ！！！");
        savek++;
    } else {
        $("#result_k").text("GOAL!!!!");
        goalk++;
    };
    fightk = goalk + savek;
    $("#score_k").text("k選手現在" + `${goalk}` + "ゴール/" + `${fightk}` + "回中");
});

$("#player_btn_kb").click(function () {
    $(".k").hide(1000);
    $(".t").show(1000);
});


// 最終結果
$("#btn_c").click(function () {
    if (goalk > goalt) {
        $("#last_result").text("k選手の勝利");
    } else if(goalk < goalt) {
        $("#last_result").text("t選手の勝利");
    } else {
        $("#last_result").text("引き分け");
    }
});

// 数字を選択してシュート
// $("#player_btn_b").click(function () {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     let a =numbers.splice()

//     if (a === 1) {
//         $("p[value=1]").css(`background`, 'red');
//     } else if (a === 2) {
//         $("p[value=2]").css(`background`, 'red');
//     } else if (r === 3) {
//         $("p[value=3]").css(`background`, 'red');
//     } else if (r === 4) {
//         $("p[value=4]").css(`background`, 'red');
//     } else if (r === 5) {
//         $("p[value=5]").css(`background`, 'red');
//     } else if (r === 6) {
//         $("p[value=6]").css(`background`, 'red');
//     } else if (r === 7) {
//         $("p[value=7]").css(`background`, 'red');
//     } else if (r === 8) {
//         $("p[value=8]").css(`background`, 'red');
//     } else if (r === 9) {
//         $("p[value=9]").css(`background`, 'red');
//     }

//     const k = Math.floor(Math.random() * 10);

//     // 勝ち負けの判定
//     if (k === r) {
//         $("#result").text("ナイスセーブ！！！");
//         save++;
//     } else {
//         $("#result").text("GOAL!!!!");
//         goal++;
//     }
//     fight = goal + save;

//     $("#score").text("現在" + `${goal}` + "ゴール/" + `${fight}` + "回中");
// });
