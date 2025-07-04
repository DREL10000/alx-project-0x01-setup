export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostPageProps {
    posts: PostProps[];
}

export interface GeoProps {
    lat: string;
    lng: string;
}

export interface AddressProps {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoProps;
}

export interface CompanyProps {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserProps {
    id: number;
    email: string;
    name: string;
    username: string;
    address: AddressProps;
    phone: string;
    website: string;
    company: CompanyProps;
}

export interface UserPageProps {
    posts: UserProps[];
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserData {
    id?: number;
    email: string;
    name: string;
    username: string;
    address: AddressProps;
    phone: string;
    website: string;
    company: CompanyProps;
}

export interface UserModalProps {
    onClose: () => void;
    onSubmit: (post: UserProps) => void;
}