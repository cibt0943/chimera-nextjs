module Api
  module V1
    # Usersコントローラー
    class UsersController < PrivateController
      def show
        user = find(id)
        if user
          render json: user, status: :ok
        else
          render json: { errors: user.errors.as_json(full_messages: true) }, status: :bad_request
        end
      end
    end
  end
end
