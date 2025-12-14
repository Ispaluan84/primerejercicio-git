import supabase from "../config/supabase.js";

export const isSubscriptionActive = async (userId) => {
    const { data } = await supabase
        .from("subscriptions")
        .select("status")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

    return data?.status === "active";
}