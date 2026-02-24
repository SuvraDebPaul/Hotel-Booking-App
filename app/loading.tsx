import Loader from '@/components/ui/loader';

const loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Loader/>
        </div>
    );
};

export default loading;