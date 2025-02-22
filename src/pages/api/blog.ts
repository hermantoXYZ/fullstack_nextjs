import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

type ResponseData = {
    status: boolean;
    statusCode: number;
    message?: string;
    data?: any;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        switch (req.method) {
            case 'GET':
                const posts = await prisma.blogPost.findMany({
                    orderBy: {
                        createdAt: 'desc'
                    }
                });
                
                return res.status(200).json({
                    status: true,
                    statusCode: 200,
                    data: posts
                });

            case 'POST':
                const newPost = req.body;
                if (!newPost.title || !newPost.content || !newPost.author) {
                    return res.status(400).json({
                        status: false,
                        statusCode: 400,
                        message: 'Missing required fields'
                    });
                }
                
                const post = await prisma.blogPost.create({
                    data: {
                        title: newPost.title,
                        content: newPost.content,
                        author: newPost.author
                    }
                });
                
                return res.status(201).json({
                    status: true,
                    statusCode: 201,
                    message: 'Blog post created successfully',
                    data: post
                });

            case 'DELETE':
                const { id } = req.query;
                await prisma.blogPost.delete({
                    where: {
                        id: Number(id)
                    }
                });

                return res.status(200).json({
                    status: true,
                    statusCode: 200,
                    message: 'Blog post deleted successfully'
                });

            default:
                res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
                return res.status(405).json({
                    status: false,
                    statusCode: 405,
                    message: `Method ${req.method} is not allowed`
                });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error'
        });
    }
}