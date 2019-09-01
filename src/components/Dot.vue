<template>
  <div class="dot-wrap" v-bind="$attrs">
    <div class="text-wrap">
      <div class="text">{{ text }}</div>
    </div>

    <div class="dots">
      <div v-for="i in 5" :key="i" class="dot"/>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur"/>
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"/>
          <feBlend in="SourceGraphic" in2="goo"/>
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Dot',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.dot-wrap {
  position: absolute;
  cursor: pointer;
  & > .text-wrap {
    display: none;
  }
  &:hover > .text-wrap {
    position: absolute;
    top: -1rem;
    left: -4.8rem;
    display: inline-block;
    width: 10rem;
    text-align: center;
    .text {
      display: inline-block;
      padding: 0.05rem 0.15rem;
      border: 0.05rem double #eee;
      border-radius: 0.22rem;
      color: #eeeeee;
      font-size: 0.28rem;
      text-shadow:5px 2px 6px #000;
    }
  }
}
$dot-color: #79c3cd;
$dot-size: 0.2rem;
$circle-size: 0.3rem;
$animation-time: 4s;

$color-yellow: #fbd301;
$color-red: #ff3270;
$color-blue: #eeeeee;
$color-green: #afe102;

$colors: ($color-yellow, $color-red, $color-blue, $color-green);

.dots {
	width: 0;
	height: 0;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	margin: auto;

	filter: url(#goo)
}

.dot {
	width: 0;
	height: 0;
	position: absolute;
	left: 0;
	top: 0;

	&:before {
		content: '';
		width: $dot-size;
		height: $dot-size;
		border-radius: 0.5rem;
		background: $color-yellow;
		position: absolute;
		left: 50%;
		transform: translateY(0) rotate(0deg);
		margin-left: -($dot-size/2);
		margin-top: -($dot-size/2);
	}

	@keyframes dot-move {
		0% {
			transform: translateY(0);
		}

		18%, 22% {
			transform: translateY(-($circle-size));
		}

		40%, 100% {
			transform: translateY(0);
		}
	}

	@keyframes dot-colors {
		@for $i from 0 to 4 {
			#{$i*25%} {
				background-color: nth($colors, ($i+3)%4+1);
			}
		}

		100% {
			background-color: nth($colors, 4);
		}
	}

	&:nth-child(5):before {
		z-index: 100;
		width: $dot-size * 1.3;
		height: $dot-size * 1.3;
		margin-left: -($dot-size * .65);
		margin-top: -($dot-size * .65);
		animation: dot-colors $animation-time ease infinite;
	}

	@for $i from 0 to 4 {
		@keyframes dot-rotate-#{$i + 1} {
			0% {
				transform: rotate(#{($i+1)*270deg - 375deg});
			}

			100% {
				transform: rotate(#{($i+1)*270deg + 0deg});
			}
		}

		&:nth-child(#{$i + 1}) {
			animation: dot-rotate-#{$i + 1} $animation-time #{$i * $animation-time / 4} linear infinite;

			&:before {
				background-color: nth($colors, $i+1);
				animation: dot-move $animation-time #{$i * $animation-time/4} ease infinite;
			}
		}
	}
}
</style>
