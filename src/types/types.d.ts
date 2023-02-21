interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  }
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: number;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  }
};

interface IPost {
  id: number;
  body: string;
  title: string;
  userId: number;
};

interface IUseIdProps {
  userId: number;
}

type TAlbum = Omit<IPost, 'body'>;