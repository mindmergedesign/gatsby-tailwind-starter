# Gatsby Tailwind/Styled-Components Starter

## Getting Started

Install Gatsby CLI:

```sh
npm install --global gatsby-cli
```

Create new Gatsby project using this starter:

```sh
gatsby new my-new-website https://github.com/mindmergedesign/gatsby-tailwind-starter/
```

```sh
cd my-new-website
```

## Usage

### Develop

```
npm run develop
```

### How do I use it?

```javascript
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  ${tw`py-8`};
`
const Text = styled.p`
  ${tw`bg-black text-white`};
`

const Home = () => (
  <Container>
    <Text>I am Text component made with Tailwind CSS + Styled Components</Text>
  </Container>
)

export default Home
```

**Enjoy!**
