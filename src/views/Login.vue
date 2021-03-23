<template>
  <!-- 背景色 -->
  <section id="login" class="login">
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="box">
      <!-- 背景圆形 -->
      <div class="circle" style="--x: 0"></div>
      <div class="circle" style="--x: 1"></div>
      <div class="circle" style="--x: 2"></div>
      <div class="circle" style="--x: 3"></div>
      <div class="circle" style="--x: 4"></div>
    </div>
    <!-- 登录框 -->
    <div class="container">
      <div class="form">
        <h2>登录</h2>
        <form action="">
          <div class="input-box">
            <input type="text" placeholder="用户名" />
          </div>
          <div class="input-box">
            <input type="password" placeholder="密码" />
          </div>
          <div class="input-box">
            <input type="submit" value="登录" />
          </div>
          <p class="forget">忘记密码?<a href="#"> 点击这里 </a></p>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
/* 清楚浏览器默认边距 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
}
/* flex实现居中 */
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
}

/* 背景颜色 */
section .color {
  position: absolute;
  filter: blur(200px);
}

section .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
  background-color: #ff359b;
}

section .color:nth-child(2) {
  bottom: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
  background-color: #fffd87;
}

section .color:nth-child(3) {
  bottom: 50px;
  right: 100px;
  width: 500px;
  height: 500px;
  background-color: #00d2ff;
}
.box {
  position: relative;
}
/* 背景圆 */
.box .circle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  filter: hue-rotate(calc(var(--x) * 70deg));
  animation: animate 10s linear infinite;
  animation-delay: calc(var(--x) * 1s);
  border-radius: 50%;
}
@keyframes animate {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0);
  }
}

.box .circle:nth-child(1) {
  top: -280px;
  right: -460px;
  width: 100px;
  height: 100px;
}

.box .circle:nth-child(2) {
  top: -110px;
  right: -10px;
  width: 120px;
  height: 120px;
  z-index: 2;
}

.box .circle:nth-child(3) {
  bottom: -80px;
  right: -460px;
  width: 80px;
  height: 80px;
  z-index: 2;
}

.box .circle:nth-child(4) {
  bottom: 240px;
  left: 180px;
  width: 60px;
  height: 60px;
  z-index: 2;
}

.box .circle:nth-child(5) {
  bottom: -240px;
  left: 80px;
  width: 60px;
  height: 60px;
  z-index: 2;
}

/* 登录框 */
.container {
  position: relative;
  width: 400px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.form {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px;
}
/* 登录标题 */
.form h2 {
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 5px;
  margin-bottom: 30px;
  cursor: pointer;
}

/* 登录标题下划线 */
.form h2::before {
  content: "";
  position: absolute;
  width: 0;
  height: 3px;
  background-color: #fff;
  bottom: -5px;
  transition: 0.5s;
}
.form h2:hover::before {
  width: 53px;
}

/* 输入框 */
.form .input-box {
  width: 100%;
  margin-top: 20px;
}

form .input-box input {
  width: 100%;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.3);
  outline: none;
  border: none;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.05);
}

.form .input-box input[type="submit"] {
  background: #fff;
  color: #666;
  max-width: 120px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
}

.forget {
  margin-top: 5px;
  color: #fff;
  letter-spacing: 1px;
}
</style>
