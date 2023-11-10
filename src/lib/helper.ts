import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error' | 'info' | 'warning';

export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export function getUserIdFromLocalStorage(): string | null {
  try {
    const userDataString = getFromLocalStorage('USER_DATA'); // Use the existing function to retrieve USER_DATA string
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const userId = userData.id; // Extract the id property from the parsed JSON data
      return userId;
    }
    return null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving userId from local storage:', error);
    return null;
  }
}

export const showToast = (
  type: ToastType,
  message: string,
  customOptions?: ToastOptions
) => {
  const defaultOptions: ToastOptions = {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };

  const options: ToastOptions = {
    ...defaultOptions,
    ...customOptions,
  };

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'info':
      toast.info(message, options);
      break;
    case 'warning':
      toast.warning(message, options);
      break;
    default:
      break;
  }
};
