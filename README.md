# Search for your favorite Places near you

A web application that enables users to discover nearby places such as restaurants, supermarkets, and banks based on their current location.

## Requirements

- Docker
- Docker Compose

## Setup

1. **Clone the repository:**

    ```bash
    git clone git@github.com:okumujustine/ug_locator.git
    cd ug_locator
    ```

2. **Create a `.env` file from the `.example.env` file:**

    ```bash
    cp .example.env .env.development
    ```

3. **Build and start the application using Docker:**

    ```bash
    docker-compose -f docker-compose.dev.yml up -d --build
    ```

4. **Open the application in your browser:**

    Navigate to:

    ```plaintext
    http://localhost:8000/
    ```

