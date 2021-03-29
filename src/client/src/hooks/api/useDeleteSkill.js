import useUserSync from '../sync/useUserSync';
import ENDPOINTS from '../../constants/endpoints';

const useDeleteSkill = () => {
    const syncUser = useUserSync();

    const deleteSkill = async (e, skillId) => {
        e.preventDefault();
        const response = await fetch(ENDPOINTS.skill, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                skillId,
            }),
        });
        if (response.ok) {
            syncUser();
        }
    };

    return { deleteSkill };
};

export default useDeleteSkill;
