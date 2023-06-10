'use client';
import MapProducts from '@/app/Components/MapProducts/MapProducts';
import {useSearchParams} from 'next/navigation'

export default function Products() {
    const searchParams = useSearchParams()
    const category = searchParams.get('products')
    return <MapProducts category={category}/>
}