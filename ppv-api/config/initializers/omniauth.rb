OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
    # provider :venmo, ENV['VENMO_CLIENT_ID'], ENV['VENMO_CLIENT_SECRET']
    provider :venmo, '3015', '965vwwyWAyp2kwXVeB7SBwRvshk9fJa2', :scope => 'access_profile,access_email,access_friends,make_payments,access_feed' 
end
