// User API
export interface ProzTokenResponse {
    access_token: string,
    expires_in: number,
    token_type: string,
    scope: string,
}

export interface User {
    self_link: string;
    uuid: string;
    date_registered: string;
    site_name: string;
    account_type: number;
    freelancer_profile_link: string;
    profile_url: string;
    image_url: string;
    is_proz_member: boolean;
    proz_membership_type: string;
    is_id_verified: boolean;
    is_cpn: boolean;
    cpn_language_pair: string;
    native_languages: string[];
    timezone: string;
    country: string;
    skype: string;
}

export interface UsersResponse {
    users: User[];
}

export interface ContactInfo {
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
}

export interface ProzMembership {
    status: string;
    expiration_date: string;
    expired_date: string;
    certified_pro_network_status: string;
    plus_package: boolean;
    membership_type: string;
    membership_package: string;
}

export interface Employer {
    business_id: number;
    business_name: string;
    business_membership_package: string;
    business_membership_expiration_date: string;
    lwa_avg_five_year: number;
    lwa_num_entries_five_year: number;
    jobs_posted_12_months: number;
    business_link: string;
    self_link: string;
    is_employee: boolean;
    employee_title: string;
    employee_is_admin: boolean;
}

export interface ActiveUser {
    uuid: string;
    site_name: string;
    account_type: number;
    email: string;
    profile_url: string;
    contact_info: ContactInfo;
    proz_membership: ProzMembership;
    employers: Employer[];
}

export interface UserUUIDResponse {
    user: User;
}


// Availability API
export interface WorkingHours {
    self_link: string;
    user: string;
    workday_start: string;
    workday_end: string;
    opted_out: boolean;
    available_off_hours: boolean;
    available_weekends: boolean;
}

export interface DayAvailability {
    self_link: string;
    user: string;
    date: string;
    availability: number;
}

export interface AvailabilityResponse {
    working_hours: WorkingHours;
    days_availability: DayAvailability[];
}

export interface DayAvailabilityResponse {
    day_availability: DayAvailability;
}
