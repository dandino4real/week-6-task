

interface IProduct {
    id: number;
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

interface InewProduct {
    id: number;
    name: string;
    image: string;
    brand: string;
    category: string;
    description: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

interface IupdateProduct {
    id: number;
    name?: string;
    image?: string;
    brand?: string;
    category?: string;
    description?: string;
    price?: number;
    countInStock?: number;
    rating?: number;
    numReviews?: number;
}


interface IProductReview {
    name: string;
    rating: number;
    comment: string;
}


interface Iuser{
    id: string,
    fullname: string,
    email: string,
    password: string
    gender: string,
    phone: string,
    address: string,
  }

  declare namespace Express {
    interface Request {
      user?: Iuser;
    }
  }