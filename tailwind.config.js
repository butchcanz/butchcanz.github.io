module.exports = {
    theme: {
      extend: {
        keyframes: {
          reveal: {
            '0%': { opacity: '0', transform: 'translateY(40px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
        },
        animation: {
          reveal: 'reveal 0.7s ease forwards',
          'reveal-delay-1': 'reveal 0.7s ease 0.1s forwards',
          'reveal-delay-2': 'reveal 0.7s ease 0.2s forwards',
          'reveal-delay-3': 'reveal 0.7s ease 0.3s forwards',
        },
      },
    },
    plugins: [],
  };
  