/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAppSelector } from '@/redux/hooks';
import { useCurrentToken } from '@/redux/features/auth/authSlice';
import { removeTokenFromLocalStorage } from '@/utils/tokenHandler';
import { verifyToken } from '@/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Swal from 'sweetalert2';

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const router = useRouter();
  // const token = getTokenFromLocalStorage();
  const token = useAppSelector(useCurrentToken)
  let user: any;

  if (token) {
    user = verifyToken(token);
  }

  useEffect(() => {
    if (!token) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "Please login to access the dashboard",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/login');
    } else if (role !== undefined && role !== user?.role) {
      removeTokenFromLocalStorage();
      router.push('/login');
    }
  }, [token, role, user?.role, router]);

  // While redirecting, return null to avoid rendering anything
  if (!token || (role !== undefined && role !== user?.role)) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
