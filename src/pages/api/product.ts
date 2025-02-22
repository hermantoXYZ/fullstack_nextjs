import type { NextApiRequest, NextApiResponse } from 'next'

type Product = {
    id: number;
    name: string;
    price: number;
    size: string;
}

type ResponseData = {
    status: boolean;
    statusCode: number;
    message?: string;
    data?: Product[];
};

const products: Product[] = [
    {
        id: 1,
        name: "Baju Lebaran",
        price: 12,
        size: "XL"
    },
    {
        id: 2,
        name: "Baju Baru",
        price: 14,
        size: "L"
    },
    {
        id: 3,
        name: "baju jelek",
        price: 12,
        size: "LL"
    }
];

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    try {
        switch (req.method) {
            case 'GET':
                return res.status(200).json({
                    status: true,
                    statusCode: 200,
                    data: products
                });

            case 'POST':
                const newProduct = req.body;
                if (!newProduct.name || !newProduct.price || !newProduct.size) {
                    return res.status(400).json({
                        status: false,
                        statusCode: 400,
                        message: 'Data produk tidak lengkap'
                    });
                }
                
                const product = {
                    id: products.length + 1,
                    ...newProduct
                };
                products.push(product);
                
                return res.status(201).json({
                    status: true,
                    statusCode: 201,
                    message: 'Produk berhasil ditambahkan',
                    data: [product]
                });

            default:
                res.setHeader('Allow', ['GET', 'POST']);
                return res.status(405).json({
                    status: false,
                    statusCode: 405,
                    message: `Method ${req.method} tidak diizinkan`
                });
        }
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Terjadi kesalahan server'
        });
    }
}