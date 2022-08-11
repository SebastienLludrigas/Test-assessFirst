<template>
  <div class="lightsaber-example">
  <div class="lightsaber">
    <div class="hilt">
      <div class="switch"></div>
    </div>
    <div class="plasma vader"></div>
  </div>
</div>
</template>

<script>

</script>

<style lang="scss" scoped>
.lightsaber .hilt {
	cursor: pointer;
	width: 15px;
	height: 50px;
	border-bottom: solid 4px grey;
	border-top: solid 5px grey;
	border-radius: 5px;
	z-index: 1;
	background: rgb(226, 226, 226);
	background: linear-gradient(
		to right,
		rgba(226, 226, 226, 1) 0%,
		rgba(219, 219, 219, 1) 50%,
		rgba(209, 209, 209, 1) 51%,
		rgba(254, 254, 254, 1) 100%
	);

	& > .switch {
		background: #b94a37;
		width: 3px;
		height: 10px;
		position: absolute;
		bottom: 25px;
		left: 13px;
		border-radius: 10px;
	}
}

.lightsaber .plasma {
	border-radius: 12px 12px 0 0;
	position: absolute;
	bottom: 45px;
	left: 2px;
	width: 10px;
	display: block;
	height: 250px;
	transform-origin: bottom center;
  z-index: -1;
	filter: blur(1px);
}

.vader {
	background: linear-gradient(
		to right,
		rgb(52, 255, 1) 0%,
		white 30%,
		white 47%,
		white 71%,
		rgb(52, 255, 1) 100%
	);
	box-shadow: 0 0 15px rgb(107, 255, 1);
}

.lightsaber-example {
	display: flex;
  justify-content: center;
	padding-top: 280px;
}

.lightsaber {
	position: relative;
  animation: ls-rotate 1.8s cubic-bezier(.8,-0.91,.01,.91) infinite;
}

@keyframes ls-rotate {
  0% {
    transform: rotate(0deg);
    transform-origin: 50px 50px;
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>