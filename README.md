# Z – A Social Media App

Z is a full-stack social media platform inspired by modern microblogging apps (like X).  
Users can register, log in, create posts, and engage through comments in a shared feed.  
The project demonstrates integration of authentication, API design, database management, and a responsive frontend.

---

## ✨ Features

- **User Authentication** – Register and log in securely.  
- **Post Creation** – Share short text posts in the global feed.  
- **Feed Display** – See all posts in a centralized timeline.  
- **Commenting** – Add comments to posts.  
- **Responsive UI** – Built with Tailwind for a clean layout.  

---

## 🛠️ Tech Stack

**Frontend**
- React + Vite  
- TypeScript  
- Tailwind CSS  

**Backend**
- Node.js with [Hono](https://hono.dev/)  
- Drizzle ORM + SQLite  
- TypeScript  
- RESTful API design  

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/z-social-app.git
cd z-social-app
```
### 2. Setup Backend (API)

```bash
cd api
pnpm install

# Apply database migrations
pnpm db:push

# (Optional) Seed database with test data
pnpm db:seed

# Run the API server on port 3000
pnpm dev
```
### 3.Setup Frontend (Web)

Open a new terminal
```bash
cd web
pnpm install

# Run the development server on port 5173
pnpm dev

```
### 4. Access the App

```bash
Frontend: http://localhost:5173
Backend API: http://localhost:3000/api
```
---

### Screenshots (Examples)

Sign in screen:
![Feed Screenshot](./sign_in)


---

## Development Notes

This project was developed as part of a full-stack coursework project to practice integrating:
- Database design with Drizzle ORM
- REST API with Hono
- Frontend state management with React
- Authentication flows

--- 

## 🔮 Future Improvements

- Add likes and follows to support richer social interaction
- Implement user profiles with bios and avatars
- Add real-time updates using websockets
- Deploy to cloud 
