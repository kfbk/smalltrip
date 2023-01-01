<template>
  <div class="tw-page">
    <p>
      次の電話またはメールにて問い合わせ下さい
    </p>
    <p class="py-4">
      ――― 電話は、次で問い合わせ ――――
    </p>
    <p>
      居酒屋 [風車] 内、新井<br>
      電話番号：0495-21-8406<br>
      平日12:00～17:00に電話下さい
    </p>
    <p class="py-4">
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
          <input class="tw-input" type="text" name="name" />
        </label>
      </p>
      <p>
        <label>Eメール：
          <input class="tw-input" type="email" name="email" />
        </label>
      </p>
      <p>
        <label>内容：
          <textarea class="h-64 tw-input" name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit" class="bg-gradient-to-b from-blue-300 to-blue-800 hover:bg-gradient-to-l text-white rounded px-4 py-2">
          送信
        </button>
      </p>
    </form>
  </div>
</template>