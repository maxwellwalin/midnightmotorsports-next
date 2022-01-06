// at its simplest, acces control returns a boolean indicating whether or not the user is allowed to access the route.
import { permissionsList } from './schemas/fields';
import { ListAccessArgs } from './types';

export function isSignedIn({ session }: ListAccessArgs) {
    return !!session;
}

const generatedPermissions = Object.fromEntries(permissionsList.map(permission => [
    permission,
    function({ session }: ListAccessArgs) {
        return !!session?.data.role?.[permission];
    }
]));

// Permissions check if someone meets a criteria
export const permissions = {
    ...generatedPermissions
}

// Rules return a boolean and or a filter which limits which parts they can crud
export const rules = {
    canManageParts({ session }: ListAccessArgs) {
        if(permissions.canManageParts({ session })) {
            return true;
        }
        return false;
    },
}