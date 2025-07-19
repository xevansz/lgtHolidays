# LGT Holidays - Travel Website

A modern, interactive travel website showcasing destinations worldwide with an animated 3D globe and elegant user interface.

## 🛠️ Technologies Used

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Interactive functionality and DOM manipulation
- **amCharts**: 3D globe visualization library
- **Font Awesome**: Icon library for UI elements
- **Google Fonts**: Typography (Lato, Montserrat, Lora, Roboto)
- **Parcel**: Build tool for development and bundling

## 📁 Project Structure

```
lgtHolidays/
├── src/
│   ├── index.html          # Main homepage
│   ├── bali.html           # Bali destination page
│   ├── china.html          # China destination page
│   ├── dubai.html          # Dubai destination page
│   ├── card.html           # Card layout template
│   ├── nav.html            # Navigation component
│   ├── footer.html         # Footer component
│   ├── css/
│   │   ├── style.css       # Main stylesheet
│   │   ├── responsive.css  # Responsive design rules
│   │   ├── nav.css         # Navigation styles
│   │   └── destinations.css # Destination page styles
│   ├── js/
│   │   └── app.js          # Main JavaScript functionality
│   └── assets/             # Images and media files
├── package.json            # Project dependencies and scripts
├── site.webmanifest        # PWA manifest file
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lgtHolidays
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:1234`

## 🎨 Design Features

### Navigation Bar
- **Sticky positioning** with smooth shadow on scroll
- **Glassmorphism effect** with backdrop blur
- **Dropdown menu** for destinations with keyboard navigation
- **Search bar** with expand/collapse animation
- **Active link highlighting** based on scroll position

### Interactive Globe
- **3D rotating world map** using amCharts library
- **Hover effects** on countries
- **Smooth animations** and transitions
- **Responsive sizing** for different screen sizes

### Destination Cards
- **Hover animations** with image blur effects
- **Geographic categorization** (Africa, Europe, Americas, etc.)
- **Consistent styling** across all destination pages

## 🔧 Customization

### Adding New Destinations
1. Create a new HTML file in the `src/` directory
2. Copy the navbar structure from `index.html`
3. Add the destination to the dropdown menu in all HTML files
4. Update the navigation links accordingly

### Styling Modifications
- Main styles are in `src/css/style.css`
- Navigation-specific styles are in `src/css/nav.css`
- Responsive design rules are in `src/css/responsive.css`

### JavaScript Functionality
- Main interactive features are in `src/js/app.js`
- Globe configuration is inline in `index.html`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a design portfolio project. Feel free to fork and modify for your own use.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Authors

- **MatthewsZen** - Initial design and development
- **MahiReddy3001** - Initial design

## 🙏 Acknowledgments

- **amCharts** for the interactive globe visualization
- **Unsplash** for high-quality destination images
- **Font Awesome** for the icon library
- **Google Fonts** for typography

---

*"Redesigning Travel Trends" - LGT Holidays* 