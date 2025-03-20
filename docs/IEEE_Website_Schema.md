# 1. IEEE-Main-Website ERD

***This is the database structure for the main IEEE website.***
- All users are initially treated as Guests.
- Only Super Modulators or Modulators can register.

### Who will use this website
1. **Super Modulators** :
   - Can add Chapters and Tracks.
   - Can promote authenticated users to **Modulators**.
   - **Super Modulators** have all permissions of **Modulators**
2. **Modulators** :
   - Can create Blogs, add Events, and upload Images.
   - Modulator can't delete another Modulator’s blog or event
3. **Users(Guests)** :
   -  Can view all Blogs, Events, Chapters, Tracks, and Images.
   -  Cannot create or edit content.
   -  Cannot wirte comment or add react .

### Image Storage Rules
1. Images related to events are stored in the event_imgs table.
1. Any general images (not linked to a specific event) are stored in the extra_imgs table.

---

### Schema 

```mermaid
erDiagram

    users {
        int id PK
        varchar name
        varchar email
        varchar img
        varchar role
        varchar ieee_position
        varchar remember_token
        date created_at
        date updated_at
    }

    blogs {
        int id PK
        varchar title
        varchar content
        varchar img
        int track_id FK
        int user_id FK
        date created_at
        date updated_at
    }

    tracks {
        int id PK
        varchar name
        varchar description
        varchar img
        int user_id FK
        int chapter_id FK
        date created_at
        date updated_at
    }

    chapters {
        int id PK
        varchar name
        varchar description
        varchar img
        int user_id FK
        date created_at
        date updated_at
    }


    extra_imgs {
        int id PK
        varchar description
        varchar img
        date created_at
        date updated_at
    }

    events {
        int id PK
        varchar name
        varchar description
        varchar img
        int track_id FK
        date start_at
        date end_at 
        date created_at
        date updated_at
    }

    event_imgs {
        int id PK
        varchar description
        varchar img
        int event_id FK
        date created_at
        date updated_at
    }

users ||--o{ blogs:write
users ||--|| tracks:lead
users ||--|| chapters:lead

tracks ||--o{ blogs:has
tracks ||--o{ events:"responsibles for"

chapters ||--o{tracks:contains

events ||--o{event_imgs:has

```

