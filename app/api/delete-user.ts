// pages/api/delete-user.js
import { Clerk } from '@clerk/backend';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { userId } = req.body;

            if (!userId) {
                return res.status(400).json({ error: 'User ID is required.' });
            }

            // Initialize Clerk Admin API (ensure you have your secret key configured)
            const clerk = Clerk({ secretKey: process.env.CLERK_SECRET_KEY });

            // Delete the user
            await clerk.users.delete(userId);

            return res.status(200).json({ success: true });
        } catch (error) {
            console.error('Error deleting Clerk user:', error);
            return res.status(500).json({ error: 'Failed to delete user.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}