# Admin User Creation Guide

This document outlines the standard procedure for creating an admin user in the Habesha Movers application, ensuring proper password hashing and database interaction.

## Prerequisites

-   **Node.js**: Ensure Node.js is installed.
-   **Database**: A running PostgreSQL instance.
-   **Environment Variables**: A `.env` file in the project root with a valid `DATABASE_URL`.
    -   Example: `DATABASE_URL="postgres://user:password@localhost:5432/habesha_movers"`

## Step-by-Step Instructions

1.  **Configure the User**
    OPEN the file `create-user.ts` in the project root.
    Edit the variables at the top of the `main` function to set your desired credentials:

    ```typescript
    const email = 'your-email@example.com';   // <--- Change this
    const password = 'your-secure-password';  // <--- Change this
    ```

    You can also modify the `name` field in the `prisma.user.upsert` call if desired.

2.  **Run the Seed Script**
    We have configured an npm script to handle the execution safely. Run the following command in your terminal:

    ```bash
    npm run seed
    ```

    *Alternatively, you can run:* `npx tsx create-user.ts`

3.  **Verify Creation**
    Look for the success message in the terminal output:
    > ✅ User created successfully: your-email@example.com

4.  **Log In**
    Start the development server (`npm run dev`) and navigate to:
    [http://localhost:3000/admin/login](http://localhost:3000/admin/login)

    Enter the email and password you configured in Step 1.

## Troubleshooting

-   **`ECONNREFUSED`**: Check that your database server is running and the port in `DATABASE_URL` is correct.
-   **`P2002` (Unique Constraint)**: This usually means the email already exists. The script uses `upsert` so it should technically update an existing user, but if you changed logic, verify potential conflicts.
-   **`PrismaClientInitializationError`**: Run `npx prisma generate` to ensure your client matches the current schema.
