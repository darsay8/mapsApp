import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request,
} from 'react-native-permissions';
import {Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface IPermissionsState {
  locationStatus: PermissionStatus;
  askLocationPermission: () => void;
  checkLocationPermission: () => void;
}

export const usePermissionsStore = create<IPermissionsState>()(
  devtools(
    persist(
      set => ({
        locationStatus: 'unavailable',
        askLocationPermission: async () => {
          let permissionStatus: PermissionStatus;

          if (Platform.OS === 'ios') {
            permissionStatus = await request(
              PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            );
          } else {
            permissionStatus = await request(
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            );
          }
          set({locationStatus: permissionStatus});
          console.log('here', permissionStatus);
        },
        checkLocationPermission: () => async () => {
          let permissionStatus: PermissionStatus;
          if (Platform.OS === 'ios') {
            permissionStatus = await check(
              PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
            );
          } else {
            permissionStatus = await check(
              PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
            );
          }
          set({locationStatus: permissionStatus});
        },
      }),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
