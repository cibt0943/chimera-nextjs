Rails.application.routes.draw do
  namespace :api, format: 'json' do
    namespace :v1 do
      # task
      resources :tasks do
        member do
          get :move_higher, to: 'task_position#higher'
          get :move_lower, to: 'task_position#lower'
        end
      end
    end
  end
end
