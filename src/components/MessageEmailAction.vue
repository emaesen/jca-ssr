<template>
  <div>
    <p>
      <span class="action-required">You're almost done!...</span><br>
      Your email app should open, allowing you to send a prepared email message to JCA from your current email address. 
      <i><b>Check outside this browser for a message window to access your preferred email app…</b></i><br>
      <span class="action-required">You must open your email app and send the prepared email in order to complete this action.</span>
    </p>
    <p>
      Re-directing to your email app and asking you to send a prepared email from your personal account ensures:
    </p>
    <ol>
      <li>JCA gets a valid email address to reply to,</li>
      <li>you have the option to add a personal note,</li>
      <li>you get to keep a copy of your sent message,</li>
      <li>and… it adds a hurdle for those pesky spam bots.</li>
    </ol>
    <p class="action-note">
      This automated process should be easy and transparent on a mobile device, but if you are using a desktop or laptop computer and you exclusively access your email through a website, you'll have to open that email website in a separate tab of your browser and copy-and-paste the prepared message below.
    </p>
  </div>
</template>

<style lang="less" scoped>
  .action-required {
    color:rgb(150, 17, 17);
    font-weight: 700;
    font-size: 110%;
  }
  .action-note {
    font-size: 85%;
    font-style: italic;
    color: rgb(141, 65, 2);
  }
</style>