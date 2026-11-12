import decorate from './cards.js';
import './cards.css';

const cardImages = [
  '/images/AAPI-Data-AP-NORC.png',
  '/images/AmplifyAAPI_Heros-Home.jpg',
  '/images/cross-industry-report-image.png',
  '/images/State-of-Hate-Website-Carousel-Banner-2.png',
];

const renderCards = (args) => {
  const block = document.createElement('div');
  block.className = 'cards';
  block.classList.add(['one-per-row', 'two-per-row', 'three-per-row'][args.cardsPerRow - 1]);

  for (let index = 0; index < args.cardCount; index += 1) {
    const row = document.createElement('div');
    const cardNumber = index + 1;

    if (args.showImages) {
      const imageCell = document.createElement('div');
      const picture = document.createElement('picture');
      const image = document.createElement('img');
      image.src = cardImages[index % cardImages.length];
      image.alt = `Research story ${cardNumber}`;
      picture.append(image);
      imageCell.append(picture);
      row.append(imageCell);
    }

    const body = document.createElement('div');
    const title = document.createElement('h3');
    const summary = document.createElement('p');
    title.textContent = `${args.title} ${cardNumber}`;
    summary.textContent = args.summary;
    body.append(title, summary);

    if (args.showLinks) {
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = 'Explore this story';
      link.addEventListener('click', (event) => {
        event.preventDefault();
        args.onCardClick({ cardNumber, title: title.textContent });
      });
      body.append(link);
    }

    row.append(body);
    block.append(row);
  }

  decorate(block);
  return block;
};

export default {
  title: 'Blocks/Cards',
  parameters: {
    docs: {
      description: {
        component: 'The Cards block turns authored rows into a responsive card grid.',
      },
    },
  },
  argTypes: {
    cardCount: {
      control: {
        type: 'range',
        min: 1,
        max: 6,
        step: 1,
      },
      description: 'Number of cards in the grid.',
    },
    cardsPerRow: {
      control: 'select',
      options: [1, 2, 3],
      description: 'Maximum number of cards per row on desktop.',
    },
    showImages: {
      control: 'boolean',
      description: 'Show or hide the image cell in each card.',
    },
    showLinks: {
      control: 'boolean',
      description: 'Add an action-tracked link to each card.',
    },
    title: {
      control: 'text',
      description: 'Heading prefix used for each card.',
    },
    summary: {
      control: 'text',
      description: 'Body copy shown in each card.',
    },
    onCardClick: {
      action: 'card link clicked',
      control: false,
      description: 'Logged when a card link is clicked.',
    },
  },
};

export const DefaultGrid = {
  name: 'Default grid',
  render: renderCards,
  args: {
    cardCount: 3,
    cardsPerRow: 3,
    showImages: true,
    showLinks: false,
    title: 'Community insights',
    summary: 'Explore research and stories from our latest work.',
  },
};

export const EditorialLinks = {
  name: 'Editorial cards with actions',
  render: renderCards,
  args: {
    ...DefaultGrid.args,
    cardCount: 4,
    showLinks: true,
    title: 'Featured research',
    summary: 'Open the Actions panel and click a card link to see its event.',
  },
};

export const TextOnly = {
  name: 'Text-only cards',
  render: renderCards,
  args: {
    ...DefaultGrid.args,
    cardCount: 2,
    showImages: false,
    title: 'Research brief',
    summary: 'A text-first card works when images are omitted by the author.',
  },
};

export const SingleFeature = {
  name: 'Single feature card',
  render: renderCards,
  args: {
    ...DefaultGrid.args,
    cardCount: 1,
    showLinks: true,
    title: 'Featured story',
    summary: 'Use the Controls panel to adjust the content and card count.',
  },
};

export const OneCardPerRow = {
  name: 'One card per row',
  render: renderCards,
  args: {
    ...DefaultGrid.args,
    cardCount: 3,
    cardsPerRow: 1,
  },
};

export const TwoCardsPerRow = {
  name: 'Two cards per row',
  render: renderCards,
  args: {
    ...DefaultGrid.args,
    cardCount: 4,
    cardsPerRow: 2,
  },
};

export const ThreeCardsPerRow = {
  name: 'Three cards per row',
  render: renderCards,
  args: {
    ...DefaultGrid.args,
    cardCount: 6,
    cardsPerRow: 3,
  },
};
