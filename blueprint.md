# Boodify Project Blueprint

## Overview

Boodify is a web-based music streaming application that provides a clean, ad-free listening experience. It's designed to be a lightweight and fast alternative to mainstream music platforms, focusing on core features and a simple, intuitive user interface. The application is built using modern, framework-less web technologies (HTML, CSS, and JavaScript) and leverages Web Components for a modular and maintainable structure.

## Core Features & Design

### General
- **Ad-Free Experience:** The primary goal is to provide uninterrupted music playback.
- **Modern & Clean UI:** The interface is inspired by leading music streaming services, with a dark theme, clear typography, and a focus on album art.
- **Responsive Design:** The layout adapts to different screen sizes, ensuring a consistent experience on both desktop and mobile browsers.

### Header
- **Logo and Branding:** A "Boodify" logo is displayed prominently.
- **Search Bar:** A functional search bar allows users to find songs by title or artist.
- **Premium Button:** A non-functional "GET PREMIUM" button for visual purposes.
- **User Profile:** A placeholder user profile button.

### Main Content
- **Dynamic Greeting:** The greeting changes based on the time of day (e.g., "Good evening").
- **Curated Playlists:** A grid of colorful boxes highlights curated playlists like "Liked Songs" and "Rock Classics."
- **Suggested Songs:** A dynamically generated grid of music cards displays suggested songs.

### Music Cards (Web Component: `<music-card>`)
- **Custom Element:** Each song is represented by a `music-card` custom element.
- **Shadow DOM:** Each card uses the Shadow DOM to encapsulate its structure, styles, and behavior, preventing conflicts with the main page.
- **Hover & Selection Effects:**
    - On hover, the card's background color changes, and a play button appears.
    - Clicking the card body selects it, scaling up the album art slightly.
    - Clicking outside the card deselects it.
- **Play Button:**
    - Appears on hover or when the card is selected.
    - The button is only clickable when visible to prevent accidental plays.
    - Clicking the play button starts or pauses the song.
- **Data-Driven:** Card content (image, title, artist, song file) is populated from a JavaScript array (`songData`).

### Music Player
- **Persistent Player:** A music player is fixed to the bottom of the screen.
- **Animated Appearance:** The player smoothly animates into view when a song starts playing.
- **Player Controls:**
    - Play/Pause button that reflects the current state.
    - Next and Previous buttons to navigate through the playlist.
    - Progress bar that shows the current playback time and total duration.
    - Clickable progress bar to seek to different parts of the song.
    - Volume control slider.
- **Now Playing Info:** Displays the album art, title, and artist of the currently playing song.

### Left Pane (Library)
- **Collapsible Panel:** A side panel displays the user's library and can be collapsed to save space.
- **Smooth Animation:** The collapse and expand actions are animated smoothly.

## Technical Implementation

- **HTML (`index.html`):** Provides the basic structure of the application, including the header, main content areas, and the music player.
- **CSS (`style.css`):** 
    - Uses modern CSS features like Flexbox and Grid for layout.
    - Implements the dark theme and all visual styling.
    - Defines animations and transitions for a fluid user experience.
    - Uses `pointer-events` to control the clickability of buttons based on their visibility.
- **JavaScript (`main.js`):**
    - **Web Components:** Defines the `MusicCard` custom element.
    - **DOM Manipulation:** Dynamically creates and populates the music cards.
    - **Audio Playback:** Manages the `Audio` object for playing, pausing, and controlling the music.
    - **State Management:** Tracks the currently playing song, playback state (playing/paused), and selected card.
    - **Event Handling:** Manages all user interactions, including clicks, hover, and input events.
    - **Search Functionality:** Filters songs based on user input in the search bar.

## Current Plan

**Task:** Create a backup of all project files.

**Status:** Completed.

1.  **Backup `index.html`:** Read the content of `index.html` and write it to `index.html.bak`.
2.  **Backup `style.css`:** Read the content of `style.css` and write it to `style.css.bak`.
3.  **Backup `main.js`:** Read the content of `main.js` and write it to `main.js.bak`.
4.  **Create `blueprint.md`:** Create this file to document the project's features and current state.
