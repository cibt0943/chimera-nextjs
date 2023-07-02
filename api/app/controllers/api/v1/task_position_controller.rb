module Api
  module V1
    # TaskPositionコントローラー
    class TaskPositionController < PrivateController
      def higher
        task = find_task(params[:id])

        if task.move_higher
          render json: task, status: :ok
        else
          render json: { errors: task.errors.as_json(full_messages: true) }, status: :bad_request
        end
      end

      def lower
        task = find_task(params[:id])

        if task.move_lower
          render json: task, status: :ok
        else
          render json: { errors: task.errors.as_json(full_messages: true) }, status: :bad_request
        end
      end

      private

      def find_task(id)
        Task.find_by(id: id, user_id: current_user)
      end
    end
  end
end
