<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6">
    <p>
      次の電話またはメールにて問い合わせ下さい<br><br>
      居酒屋 [風車] 内、新井<br>
      電話番号：0495-21-8406<br>
      平日12:00～17:00に電話下さい
    </p>
    <p>
      ――― 以下は、メールでの問い合わせ ――――
    </p>
    <form name="contact" method="POST" netlify-honeypot="bot-field" netlify>
      <input type="hidden" name="form-name" value="contact" />
      <div v-show="false">
        <label for="bot">スパムでない場合は空欄</label>
        <input id="bot" type="text" name="bot-field" />
      </div>
      <!-- ここから本文 -->
      <p>
        <label>お名前：
          <input class="text" type="text" name="name" />
        </label>
      </p>
      <p>
        <label>Eメール：
          <input class="text" type="email" name="email" />
        </label>
      </p>
      <p>
        <label>内容：
          <textarea class="textlines" name="message"></textarea>
        </label>
      </p>
      <p>
        <v-btn
          color="primary"
          elevation="12"
          type="submit"
        >
          送信
        </v-btn>
      </p>
    </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
.textlines {
    border: 2px solid #0a0;  /* 枠線 */
    border-radius: 0.67em;   /* 角丸 */
    padding: 0.5em;          /* 内側の余白量 */
    background-color: snow;  /* 背景色 */
    width: 100%;             /* 横幅いっぱいにする */
    box-sizing: border-box;  /* ※これがないと横にはみ出る */
    height: 120px;           /* 高さ */
    font-size: 1em;          /* 文字サイズ */
    line-height: 1.2;        /* 行の高さ */
}
.text {
    border: 2px solid #0a0;  /* 枠線 */
    border-radius: 0.67em;   /* 角丸 */
    padding: 0.5em;          /* 内側の余白量 */
    background-color: snow;  /* 背景色 */
    width: 100%;             /* 横幅いっぱいにする */
    box-sizing: border-box;  /* ※これがないと横にはみ出る */
    /* height: 120px;           高さ */
    font-size: 1em;          /* 文字サイズ */
    line-height: 1.2;        /* 行の高さ */
}
</style>
